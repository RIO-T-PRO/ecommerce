import React from "react";

const ManClothes = () => {
  return (
    <div className="flex items-center justify-between shadow border border-gray-300 pl-6 pt-8">
      <div className="flex flex-col space-y-3 ">
        <h1 className="font-bold text-5xl text-gray-800">
          Best Offer Every Man's Iteams
        </h1>
        <p className="text-gray-500 text-lg">
          There are many variations of passages of Lorem Ipsum available,but the
          majority have
        </p>

        <div>
          <button className="px-6 p-1 text-xl font-semibold text-white bg-rose-400">
            Buy Now
          </button>
        </div>
      </div>

      <div>
        <img src="/images/img-3.png" alt="" />
      </div>
    </div>
  );
};

export default ManClothes;
