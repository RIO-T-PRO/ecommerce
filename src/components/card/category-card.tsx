"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { Product } from "@/data/product";
import { getDiscountedPrice } from "@/utils/functions";

interface CardMobileProps {
  product: Product;
}

const CategoryCard: React.FC<CardMobileProps> = ({ product }) => {
  const [isIntCart, setIsInCart] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const toggleCart = () => {
    setIsInCart((prev) => !prev);
    if (isIntCart) setQuantity(1);
  };

  const increasing = () => setQuantity((prev) => prev + 1);
  const decreasing = () =>
    setQuantity((prev: number) => (prev > 1 ? prev - 1 : 1));

  const totalPrice = product.price * quantity;

  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="flex flex-col items-center space-y-8 p-2 bg-white border border-gray-300">
      <h2 className="text-2xl font-bold text-black">{product.title}</h2>
      <div>
        <img src={product.image} alt={product.brand} />
      </div>

      <div className="flex items-center gap-4">
        {isIntCart ? (
          <div className="flex gap-4">
            <button
              className="p-1 rounded-md text-white bg-rose-400"
              onClick={decreasing}
            >
              <FaMinus className="text-2xl" />
            </button>
            <span>{quantity}</span>
            <button
              className="p-1 rounded-md text-white bg-rose-400"
              onClick={increasing}
            >
              <FaPlus className="text-2xl" />
            </button>

            <button
              className="p-1 rounded-md text-white font-semibold bg-rose-400"
              onClick={toggleCart}
            >
              Back
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsInCart(true)}
            className="px-4 py-1 bg-rose-400 text-lg text-white"
          >
            Add To Cart
          </button>
        )}

        <span className="text-lg font-bold text-black">{product.title}</span>
        <span className="text-lg font-semibold text-rose-400">
          ${discountedPrice}
        </span>
        <span className="text-lg line-through text-gray-400">
          ${product.price}
        </span>
      </div>
    </div>
  );
};

export default CategoryCard;
