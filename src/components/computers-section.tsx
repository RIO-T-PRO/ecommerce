import React from "react";
import CardComputers from "./card-computers";

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
          <CardComputers />
          <CardComputers />
          <CardComputers />
        </div>
      </div>
    </div>
  );
};

export default ComputerSection;
