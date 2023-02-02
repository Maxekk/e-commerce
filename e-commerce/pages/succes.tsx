import Link from "next/link";
import React from "react";

import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

type Props = {};

function succes({}: Props) {
  const { width, height } = useWindowSize();
  return (
    <div className="bg-[#dedede] w-[100%] h-screen flex justify-center items-center">
      <div className="w-[70%] h-[90%] flex flex-col">
        <div className="w-[100%] h-[30%] text-7xl text-stone-800 flex justify-center items-center">
          Thank You for purchasing from our store!
        </div>
        <div className="w-[100%] h-[30%] flex flex-col justify-center items-center text-4xl text-stone-700">
          We hope you will be satisfied with your order
        </div>
        <div className="w-[100%] h-[50%] flex flex-col justify-center items-center">
          <button className="bg-stone-800 text-white text-2xl p-5 w-[30%] transition-[0.5s] shadow-xl hover:bg-red-800">
            <Link href={"/"} className="text-3xl">
              Return to home
            </Link>
          </button>
        </div>
      </div>
      <Confetti width={width} height={height} />
    </div>
  );
}

export default succes;
