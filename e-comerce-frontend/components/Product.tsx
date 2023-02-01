import React from "react";
import Shoe from "../public/shoe.png";
import Counter from "./Counter";
import Link from "next/link";

type props = { id: string; name: string; price: number; imageURL: string };

function Product({ name, price, imageURL, id }: props) {
  return (
    <Link
      href={{
        pathname: "/product/[name]",
        query: { id: id, name: name, price: price, imgURL: imageURL },
      }}
      as={`product/${name}`}
    >
      <div className="w-[30vw] bg-[#e4e2e2] xs:h-[10vh] sm:h-[25vh] md:w-[25vw] md:h-[50vh] transition-[0.5s] hover:scale-110 shadow-xl mb-8">
        <div className="h-[75%] bg-white">
          <img src={imageURL} className="w-[100%] h-[100%]"></img>
        </div>
        <div className="flex flex-row justify-between text-2xl p-6">
          <h2>{name}</h2>
          <h2 className="text-emerald-800">{price}$</h2>
        </div>
      </div>
    </Link>
  );
}

export default Product;
