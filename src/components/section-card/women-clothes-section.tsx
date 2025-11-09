import React from "react";
import Clothes from "../card/clothes";

const WomenClothesSection = () => {
  return (
    <section className="my-12 md:my-20 px-4 md:px-8">
      {/* Section Title */}
      <div className="mb-10 md:mb-16 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800">
          Women's Clothes
        </h1>
      </div>

      {/* Clothes Card */}
      <div className="w-full">
        <Clothes />
      </div>
    </section>
  );
};

export default WomenClothesSection;
