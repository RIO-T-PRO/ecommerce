import CardComputers from "../card/card-computers";
import { products } from "@/data/product";

const ComputerSection = () => {
  return (
    <div className="w-full">
      {/* Section Title */}
      <div className="my-8">
        <h1 className="font-bold text-3xl text-center">Computers & Laptop</h1>
      </div>

      {/* Product Grid */}
      <div className="p-4">
        <div
          className="
            grid 
            grid-cols-1        /* mobile */
            sm:grid-cols-2     /* small devices / tablets */
            lg:grid-cols-3     /* large screens */
            border border-gray-200 shadow-md rounded-md
          "
        >
          {products.slice(0, 3).map((product, index) => (
            <CardComputers product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComputerSection;
