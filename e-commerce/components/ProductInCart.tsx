import React, { useContext } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { globalContext } from "../context/Context";

type Props = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  imageURL: string;
};

export default function ProductInCart({
  id,
  name,
  quantity,
  price,
  imageURL,
}: Props) {
  const { cart, setcart } = useContext(globalContext);

  const removeItem = () => {
    cart.forEach((element: { id: string }) => {
      if (element.id == id) {
        setcart(cart.filter((element: { id: string }) => element.id !== id));
      }
    });
  };

  return (
    <div className="flex bg-slate-400 w-[60vw] h-[20vh] mt-2 border-b-2">
      <div className="bg-white w-[25%] h-[100%] flex items-center justify-center flex-col">
        <img src={imageURL} className="h-[80%]"></img>
        <h3 className="h-[20%] text-xl">{name}</h3>
      </div>
      <div className="flex w-[50%]">
        <div className="flex w-[50%] bg-white items-center justify-center flex-col text-xl">
          Quantity:
          <div>{quantity}</div>
        </div>
        <div className="flex w-[50%] bg-white items-center justify-center flex-col text-xl">
          Price:
          <div className="text-green-700">{price * quantity}</div>
        </div>
      </div>
      <div className="flex bg-white w-[25%] items-center justify-center">
        <IoMdRemoveCircle
          className="w-[20%] h-[20%] transition-[0.5s] hover:text-red-600"
          onClick={removeItem}
        />
      </div>
    </div>
  );
}
