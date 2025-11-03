import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const CardCartOrder = () => {
  return (
    <div className="w-100 flex flex-col p-2 shadow border border-gray-200 rounded-2xl gap-2.5">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">Order Summary</h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-lg">Subtotal</span>
            <span className="text-lg font-semibold">$565</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-lg">Discount (-20%)</span>
            <span className="text-lg text-red-500 font-semibold">-$113</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-lg">Delivery Fee</span>
            <span className="text-lg font-semibold">$15</span>
          </div>
        </div>
      </div>

      <div className="text-gray-300 w-full mx-auto">
        <hr />
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">$467</span>
        </div>

        <div className="grid grid-rows-2 gap-2.5">
          <div className="row-span-1 flex justify-between items-center">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-4/5 outline-none shadow bg-white p-2 rounded-3xl"
            />
            <button className="p-2 bg-black text-white font-semibold rounded-3xl">
              Apply
            </button>
          </div>

          <button className="row-span-1 bg-black rounded-3xl text-white">
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCartOrder;
