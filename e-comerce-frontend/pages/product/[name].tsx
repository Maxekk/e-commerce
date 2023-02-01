import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import Counter from "../../components/Counter";
import ColorPicker from "../../components/ColorPicker";
import Navbar from "../../components/Navbar";
import { globalContext } from "../../context/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductInfo() {
  const router = useRouter();
  const [count, setcount] = useState(0);
  const { cart, setcart } = useContext(globalContext);
  const [color, setcolor] = useState("red");

  const addToCart = () => {
    if (count == 0) {
      console.log("cant add product of quantity 0 or below");
    } else {
      const checkIfProductExist = cart.find(
        (element: any) => element.id === router.query.id
      );

      if (checkIfProductExist) {
        const updatedCartItems = cart.map((cartProduct: any) => {
          if (router.query.id === cartProduct.id)
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + count,
            };
        });
        setcart(updatedCartItems);
      } else {
        setcart([
          ...cart,
          {
            id: router.query.id,
            name: router.query.name,
            quantity: count,
            imageURL: router.query.imgURL,
            price: router.query.price,
            color: color,
          },
        ]);
      }
      toast("Product added to cart");
    }
  };

  return (
    <div className="w-[100%] h-screen bg-[#ebe9e9]">
      <Navbar />
      <div className="flex w-[100%] h-[90%] items-center justify-center">
        <div className="bg-white w-[80%] h-[80%] flex shadow-xl">
          <div className="bg-white w-[55%] h-[100%] flex items-center justify-center">
            <img src={router.query.imgURL} className="w-[80%] h-[80%]"></img>
          </div>
          <div className="w-[45%] h-[100%] bg-[#353839] flex flex-col">
            <div className="w-[100%] h-[25%] text-white text-7xl flex justify-center items-center">
              {router.query.name}
            </div>
            <div className="w-[100%] h-[25%] flex gap-5 justify-center items-center">
              <ColorPicker color={color} setcolor={setcolor} />
            </div>
            <div className="w-[100%] h-[25%] flex justify-center items-center">
              <Counter count={count} setcount={setcount} />
            </div>
            <div className="w-[100%] h-[25%] flex items-center justify-center">
              <button
                className="bg-white border-solid border-stone-800 text-2xl w-[250px] h-[80px] transition-[0.5s] hover:bg-stone-800 hover:text-white"
                onClick={addToCart}
              >
                Add to cart ({Number(router.query.price) * count}$)
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[7%] mt-[-2%] flex items-center justify-center">
        <Link href={"/"}>
          <button className="border-stone-800 bg-stone-800 text-white text-2xl w-[200px] h-[50px] transition-[0.5s] hover:bg-red-800 hover:text-white">
            Return to home
          </button>
        </Link>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ProductInfo;
