import React, { useContext, useEffect } from "react";
import { globalContext } from "../context/Context";
import Product from "./Product";
import AOS from "aos";
import "aos/dist/aos.css";

type Product = {
  id: string;
  name: string;
  price: number;
  imageURL: string;
};

function Products({ products }: { products: IProduct[] }) {
  const { searchFilter } = useContext(globalContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-[#dedede] flex h-[100%] w-inherit flex-wrap overflow-auto m-10 justify-center sm:gap-10 scrollbar-hide xs: gap-8 ">
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
