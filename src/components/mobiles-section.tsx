import React from "react";
import CategoryCard from "./category-card";
import { products } from "@/data/product";

const MobilesSection = () => {
  return (
    <div>
      <div className="px-4 grid grid-cols-3 gap-5 ">
        {products.slice(3, 6).map((product, index) => (
          <CategoryCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MobilesSection;
