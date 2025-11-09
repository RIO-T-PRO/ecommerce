import React from "react";

const HeroSection = () => {
  return (
    <div className="p-4 sm:p-6 md:p-9 mb-6">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {/* Left Image */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start">
          <img
            src="/images/img-1.png"
            alt="Left Hero"
            className="w-2/3 sm:w-1/2 md:w-full h-auto object-contain"
          />
        </div>

        {/* Center Text & Buttons */}
        <div className="flex flex-col items-center md:items-center text-center md:text-center space-y-4 md:space-y-6 md:w-1/2">
          <div className="flex flex-col space-y-2 sm:space-y-3">
            <span className="text-4xl sm:text-5xl md:text-7xl text-blue-950 font-semibold">
              Big Sale
            </span>
            <span className="text-4xl sm:text-5xl md:text-7xl text-blue-950 font-semibold">
              Offer
            </span>
          </div>

          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <button className="px-6 sm:px-8 py-2 bg-rose-400 text-lg text-white rounded-md hover:bg-rose-500 transition-colors">
              Buy Now
            </button>
            <button className="px-6 sm:px-8 py-2 bg-blue-950 text-lg text-white rounded-md hover:bg-blue-800 transition-colors">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end mt-4 md:mt-0">
          <img
            src="/images/img-2.png"
            alt="Right Hero"
            className="w-2/3 sm:w-1/2 md:w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
