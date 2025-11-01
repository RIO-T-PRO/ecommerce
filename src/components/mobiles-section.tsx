import React from "react";
import CategoryCard from "./category-card";

const MobilesSection = () => {
  return (
    <div>
      <div className="px-4 grid grid-cols-3 gap-5 ">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default MobilesSection;
