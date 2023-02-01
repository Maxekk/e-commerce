import React, { useContext } from "react";
import { globalContext } from "../context/Context";
import Product from "./Product";

type Product = {
  id: string;
  name: string;
  price: number;
  imageURL: string;
};

function Products({ products }: { products: IProduct[] }) {
  const { searchFilter } = useContext(globalContext);

  return (
    <div className="bg-[#dedede] flex h-[100%] w-inherit flex-wrap overflow-auto m-10 justify-center sm:gap-10 scrollbar-hide xs: gap-8">
      {products
        .filter((product: IProduct) => {
          if (searchFilter === "" || searchFilter === " ") {
            return product;
          } else if (
            product.name.toLowerCase().includes(searchFilter.toLowerCase())
          ) {
            return product;
          }
        })
        .map(({ _id, name, price, imageURL }) => (
          <Product name={name} price={price} imageURL={imageURL} id={_id} />
        ))}
    </div>
  );
}

export default Products;
