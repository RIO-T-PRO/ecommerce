"use client";

import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { Product } from "@/data/product";
import { handleCart } from "@/hooks/handle-cart";
import { getDiscountedPrice } from "@/utils/functions";

interface CardComputerProps {
  product: Product;
}

const CardComputers: React.FC<CardComputerProps> = ({ product }) => {
  const {
    cart,
    handleAddToCart,
    increaseQuanity,
    decreasingQuantity,
    deleteItem,
  } = handleCart();

  // Check if product is already in cart
  const isInCart = cart.some((item) => item.id === product.id);
  const cartItem = cart.find((item) => item.id === product.id);

  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-3 sm:p-4 md:p-6 bg-white rounded-lg text-center">
      {/* Product Image */}
      <div className="w-3/4 sm:w-4/5 md:w-full mb-3">
        <img
          src={product.image}
          alt={product.brand}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain"
        />
      </div>

      {/* Product Title */}
      <h2
        className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-black mb-1 truncate"
        title={product.title}
      >
        {product.title}
      </h2>

      {/* Brand & Price */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3">
        <span className="text-sm sm:text-base md:text-lg font-bold text-black">
          {product.brand}
        </span>
        <span className="text-sm sm:text-base md:text-lg font-semibold text-rose-400">
          ${discountedPrice}
        </span>
        {product.discount && (
          <span className="text-xs sm:text-sm md:text-base line-through text-gray-400">
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
                disabled={cartItem?.cartQuantity === 1} // Prevent decreasing below 1
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

            {/* Delete product from cart */}
            <button
              onClick={() => deleteItem(product.id)}
              className="ml-2 text-red-400 hover:text-red-500 text-2xl"
            >
              <MdDelete />
            </button>
          </div>
        ) : (
          // Add to cart button
          <button
            onClick={() => handleAddToCart(product)}
            className="w-full py-2 sm:py-2.5 md:py-3 bg-rose-400 text-white text-base sm:text-lg md:text-lg rounded-md hover:bg-rose-500 transition-colors"
          >
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default CardComputers;
