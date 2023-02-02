import { TextField } from "@mui/material";
import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { globalContext } from "../context/Context";

export default function Navbar() {
  const { searchFilter, setsearchFilter } = useContext(globalContext);

  const updateFilter = (e: Event) => {
    const target = e.target as HTMLTextAreaElement;
    setsearchFilter(target.value);
  };

  return (
    <header className="flex flex-row h-[7%] bg-[#dedede] justify-between sticky top-0 border-b-2">
      <div className="w-[16vw]">
        <Link href={"/"}>
          <h1 className="text-black text-2xl p-2 md:text-3xl whitespace-nowrap">
            Shoes Shop
          </h1>
        </Link>
      </div>
      <div className="flex flex-row gap-10 justify-center align-center p-1">
        <TextField
          variant="outlined"
          label="Search"
          onChange={updateFilter}
          className="w-[30vw]"
          value={searchFilter}
        />
      </div>
      <div className="w-[16vw] flex flex-row-reverse">
        <h1 className="text-black text-1xl p-2  transition-[0.5s] hover:text-red-500">
          <Link href={"/cart/Cart"}>
            <AiOutlineShopping className="w-[40px] h-[40px]" />
          </Link>
        </h1>
      </div>
    </header>
  );
}
