import { FaDeleteLeft, FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

const CardCart = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 rounded-xl shadow flex justify-center items-center">
          <img
            src="/images/mac-img.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-2 space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-2xl font-bold text-black">
                Skinny Fit Jeans
              </h3>
              <span className="text-lg ">
                Size:
                <span className="text-gray-300 pl-1">Larger</span>
              </span>
              <span className="text-lg ">
                Color:
                <span className="text-gray-300 pl-1">White</span>
              </span>
            </div>

            <div className="text-red-500">
              <FaTrash />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold">$145</span>

            <button className="flex gap-3 items-center px-3 py-1 rounded-2xl bg-white shadow">
              <span>
                <FaPlus />
              </span>
              <span>1</span>
              <span>
                <FaMinus />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="text-gray-400 w-full mx-auto">
        <hr />
      </div>
    </div>
  );
};

export default CardCart;
