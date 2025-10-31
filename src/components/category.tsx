import Link from "next/link";
import React from "react";
import CategoryCard from "./category-card";
import CardComputers from "./card-computers";
import ManClothes from "./man-clothes";

const Category = () => {
  return (
    <div>
      <div className="flex justify-around items-center bg-blue-950 px-7 py-5">
        <h2 className="font-bold text-2xl text-white">CATEGORY</h2>
        <ul className="flex space-x-4 font-semibold text-xl">
          <Link href="/">Man's Fashion</Link>
          <Link href="/">Women Fashion</Link>
          <Link href="/">Beauty</Link>
          <Link href="/">Mobiles</Link>
          <Link href="/">Computers</Link>
          <Link href="/">Watchs</Link>
          <Link href="/">Kitchen</Link>
          <Link href="/">Sports</Link>
        </ul>
      </div>
      <div className="px-4 grid grid-cols-3 gap-5 ">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>

      <div className="my-20">
        <h1 className="font-bold text-5xl text-center text-gray-800">
          Computers & Laptop
        </h1>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-3 shadow border border-gray-300 shadow">
          <CardComputers />
          <CardComputers />
          <CardComputers />
        </div>
      </div>

      <div className="my-20">
        <h1 className="font-bold text-5xl text-center text-gray-800">
          Man's clothes
        </h1>
      </div>

      <div className="p-4">
        <ManClothes />
      </div>

      <div className="my-20">
        <h1 className="font-bold text-5xl text-center text-gray-800">
          woman's clothes
        </h1>
      </div>

      <div className="p-4">
        <ManClothes />
      </div>
    </div>
  );
};

export default Category;
