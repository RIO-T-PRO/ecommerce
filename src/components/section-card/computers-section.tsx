import React from "react";
import CardComputers from "../card/card-computers";
import { products } from "@/data/product";

const ComputerSection = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className="font-bold text-5xl text-center text-gray-800">
          Computers & Laptop
        </h1>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-3 border border-gray-300 shadow">
          {products.slice(0, 3).map((product, index) => (
            <CardComputers product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComputerSection;
