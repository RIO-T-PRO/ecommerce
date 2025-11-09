"use client";

import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";
import { Product } from "@/data/product";
import { getDiscountedPrice } from "@/utils/functions";
import { handleCart } from "@/hooks/handle-cart";
import { MdDelete } from "react-icons/md";

interface CardMobileProps {
  product: Product;
}

const CategoryCard: React.FC<CardMobileProps> = ({ product }) => {
  const {
    cart,
    increaseQuanity,
    decreasingQuantity,
    handleAddToCart,
    deleteItem,
  } = handleCart();

  const isInCart = cart.some((item) => item.id === product.id);
  const cartItem = cart.find((item) => item.id === product.id);
  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div
      className="
        flex flex-col items-center justify-between
        bg-white border border-gray-300 rounded-lg shadow-md
        w-full max-w-sm sm:max-w-[360px] md:max-w-[380px]
        overflow-hidden
      "
    >
      {/* Product Image */}
      <div className="w-full h-48 sm:h-52 md:h-56">
        <img
          src={product.image}
          alt={product.brand}
          className="w-full h-full object-cover rounded-t-lg"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 w-full flex flex-col items-center">
        {/* Title */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-black text-center my-2">
          {product.title}
        </h2>

        {/* Price */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 mb-4">
          <span className="text-lg sm:text-xl font-semibold text-rose-400">
            ${discountedPrice}
          </span>
          {product.discount && (
            <span className="line-through text-gray-400 text-sm sm:text-base">
              ${product.price}
            </span>
          )}
        </div>

        {/* Cart Controls */}
        <div className="w-3/4 sm:w-4/5 md:w-full">
          {isInCart ? (
            <div className="flex items-center justify-between gap-2">
              {/* Quantity Controls */}
              <div className="flex items-center justify-between flex-1 bg-rose-400 rounded-md px-3 py-2">
                <button
                  disabled={cartItem?.cartQuantity === 1}
                  onClick={() => decreasingQuantity(product.id)}
                  className="text-white text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FaMinus />
                </button>

                <span className="text-white text-lg font-medium px-3">
                  {cartItem?.cartQuantity}
                </span>

                <button
                  onClick={() => increaseQuanity(product.id)}
                  className="text-white text-lg"
                >
                  <FaPlus />
                </button>
              </div>

              <button
                onClick={() => deleteItem(product.id)}
                className="ml-2 text-red-400 hover:text-red-500 text-2xl"
              >
                <MdDelete />
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleAddToCart(product)}
              className="w-full py-2 sm:py-2.5 md:py-3 bg-rose-400 text-white text-base sm:text-lg md:text-lg rounded-md hover:bg-rose-500 transition-colors"
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
