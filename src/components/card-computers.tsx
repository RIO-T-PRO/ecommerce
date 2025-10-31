import React from "react";

const CardComputers = () => {
  return (
    <div className="flex flex-col items-center space-y-3 px-6 py-10">
      <img src="/images/computer-img.png" alt="" />
      <h2 className="text-2xl font-bold text-black">COMPUTER</h2>
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold text-black">SAMSUNG</span>
        <span className="text-lg font-semibold text-rose-400">$500</span>
        <span className="text-lg line-through text-gray-400">$1000</span>
      </div>
      <button className="px-4 py-1 bg-rose-400 text-lg text-white">
        Add To Cart
      </button>
    </div>
  );
};

export default CardComputers;
