import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ColorPicker = ({ setcolor }: any) => {
  const getColor = async (e: { currentTarget: { id: string } }) => {
    setcolor(e.currentTarget.id);
    toast("Color changed");
  };

  return (
    <>
      <div
        className="w-[70px] h-[70px] rounded-full bg-red-700 border-2 transition-[0.5s] hover:bg-red-500"
        onClick={getColor}
        id="red"
      ></div>
      <div
        className="w-[70px] h-[70px] rounded-full bg-blue-800 border-2 transition-[0.5s] hover:bg-blue-600"
        onClick={getColor}
        id="blue"
      ></div>
      <div
        className="w-[70px] h-[70px] rounded-full bg-green-800 border-2 transition-[0.5s] hover:bg-green-600"
        onClick={getColor}
        id="green"
      ></div>
      <div
        className="w-[70px] h-[70px] rounded-full bg-pink-800 border-2 transition-[0.5s] hover:bg-pink-600"
        onClick={getColor}
        id="purple"
      ></div>
      <div
        className="w-[70px] h-[70px] rounded-full bg-orange-800 border-2 transition-[0.5s] hover:bg-orange-600"
        onClick={getColor}
        id="orange"
      ></div>
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
    </>
  );
};

export default ColorPicker;
