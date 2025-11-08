import React from "react";
import Clothes from "../card/clothes";

const WomenClothesSection = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className="font-bold text-5xl text-center text-gray-800">
          woman's clothes
        </h1>
      </div>

      <div className="p-4 my-20">
        <Clothes />
      </div>
    </div>
  );
};

export default WomenClothesSection;
