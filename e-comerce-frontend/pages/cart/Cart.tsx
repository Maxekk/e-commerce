import Link from "next/link";
import React, { useContext } from "react";
import Navbar from "../../components/Navbar";
import ProductInCart from "../../components/ProductInCart";
import { BsArrowReturnLeft } from "react-icons/bs";
import { globalContext } from "../../context/Context";
import Footer from "../../components/Footer";
import getStripe from "../../lib/getStripe";
import { isReadable } from "stream";

type Props = {};
type cartproduct = {
  id: string;
  name: string;
  quantity: number;
  imageURL: string;
  price: number;
};

export default function Cart({}: Props) {
  const { cart } = useContext(globalContext);

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const res = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    });

    const data = await res.json();
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  const renderButtons = (boolean: boolean) => {
    if (boolean == false)
      return <div className="text-3xl">The cart is empty</div>;
    if (boolean) {
      return (
        <div className="bg-red-white w-[30vw] h-[8vh] mt-5 flex flex-row text-xl mb-4 gap-3">
          <div className="w-[50%] h-[100%] bg-white flex items-center justify-start p-0 text-2xl">
            <button className="bg-stone-800 text-white text-xl p-5 w-[100%] transition-[0.5s] hover:bg-red-800">
              Return to home
            </button>
          </div>
          <div className="bg-white w-[50%] h-[100%] flex justify-center items-center">
            <button
              className="bg-stone-800 text-white text-xl p-5 w-[100%] transition-[0.5s] hover:bg-green-400"
              onClick={handleCheckout}
            >
              Proceed to payment
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="w-[100%] h-screen bg-[#ebe9e9] overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col items-center w-[100%] h-[93%] gap-10">
        <div className="bg-white w-[70%] h-inherit flex flex-col items-center mt-6">
          {cart.map(({ id, name, quantity, imageURL, price }: cartproduct) => {
            return (
              <ProductInCart
                id={id}
                name={name}
                quantity={quantity}
                imageURL={imageURL}
                price={price}
              ></ProductInCart>
            );
          })}
        </div>
        {renderButtons(cart)}
      </div>
    </div>
  );
}
