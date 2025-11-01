import React from "react";
import Clothes from "./clothes";

const ManClothesSection = () => {
  return (
    <div>
      <div className="my-20">
        <h1 className="font-bold text-5xl text-center text-gray-800">
          Man's clothes
        </h1>
      </div>

      <div className="p-4">
        <Clothes />
      </div>
    </div>
  );
};

export default ManClothesSection;
