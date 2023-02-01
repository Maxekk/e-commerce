import React, { useState } from "react";

export default function Counter({ count, setcount }) {
  const handleIncrement = () => {
    setcount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) {
      setcount(0);
    } else {
      setcount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-row gap-5 p-2">
      <button
        onClick={handleDecrement}
        className="bg-white rounder-full w-16 h-16 text-black p-0 transition-[0.5s] text-5xl hover:bg-slate-900 hover:text-white"
      >
        -
      </button>
      <div className="text-white text-6xl p-0">{count}</div>
      <button
        onClick={handleIncrement}
        className="bg-white rounder-full w-16 h-16 text-black text-5xl transition-[0.5s] hover:bg-slate-900 hover:text-white"
      >
        +
      </button>
    </div>
  );
}
