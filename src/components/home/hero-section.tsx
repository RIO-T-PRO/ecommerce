import React from "react";

const HeroSection = () => {
  return (
    <div className="p-9 mb-6">
      <div className="flex items-center gap-3">
        <div>
          <img src="/images/img-1.png" alt="" />
        </div>
        <div className="flex flex-col items-center space-y-3">
          <div className="flex flex-col space-y-4">
            <span className="text-7xl text-blue-950 font-semibold ">
              Big Sale
            </span>
            <span className="text-7xl text-blue-950 font-semibold text-center">
              Offer
            </span>
          </div>

          <div className="flex space-x-2">
            <button className="px-8 py-1 bg-rose-400 text-lg text-white">
              Buy Now
            </button>
            <button className="px-8 py-1 bg-blue-950 text-lg text-white">
              Contact Us
            </button>
          </div>
        </div>
        <div>
          <img src="/images/img-2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
