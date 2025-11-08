"use client";

import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Product } from "@/data/product";
import { handleCart } from "@/hooks/handle-cart";
import { MdDelete } from "react-icons/md";
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

  const isInCart = cart.some((item) => item.id === product.id);

  const cartItem = cart.find((item) => item.id === product.id);

  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="flex flex-col items-center space-y-3 px-6 py-10">
      <img src={product.image} alt={product.brand} />
      <h2 className="text-2xl font-bold text-black">{product.title}</h2>
      <div className="flex items-center space-x-4">
        <span className="text-lg font-bold text-black">{product.brand}</span>
        <span className="text-lg font-semibold text-rose-400">
          ${discountedPrice}
        </span>
        {product.discount && (
          <span className="text-lg line-through text-gray-400">
            ${product.price}
          </span>
        )}
      </div>

      {isInCart ? (
        <div className="flex gap-4">
          <button
            disabled={cartItem?.cartQuantity === 1}
            className="p-1 rounded-md text-white bg-rose-400"
            onClick={() => decreasingQuantity(product.id)}
          >
            <FaMinus className="text-xl" />
          </button>
          <span>{cartItem?.cartQuantity}</span>
          <button
            className="p-1 rounded-md text-white bg-rose-400"
            onClick={() => increaseQuanity(product.id)}
          >
            <FaPlus className="text-xl" />
          </button>

          <button
            className="p-1 text-xl text-red-400 "
            onClick={() => deleteItem(product.id)}
          >
            <MdDelete />
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleAddToCart(product)}
          className="px-4 py-1 bg-rose-400 text-lg text-white"
        >
          Add To Cart
        </button>
      )}
    </div>
  );
};

export default CardComputers;
