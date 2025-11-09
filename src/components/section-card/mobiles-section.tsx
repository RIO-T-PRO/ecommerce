import React from "react";
import CategoryCard from "../card/category-card";
import { products } from "@/data/product";

const MobilesSection = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 ">
      <div className="my-10 md:my-20">
        <h1 className="font-bold text-3xl md:text-5xl text-center text-gray-800">
          Mobile
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {products.slice(3, 6).map((product, index) => (
          <CategoryCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MobilesSection;
