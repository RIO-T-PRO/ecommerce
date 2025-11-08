"use client";

import { useCart } from "@/contexts/cart-context";
import CardCart from "./card-cart";
import CardCartOrder from "./card-cart-order";

const CartSection = () => {
  const { cart } = useCart();

  return (
    <div className="flex flex-col space-y-6 p-10 max-w-6xl">
      <h1 className="text-4xl font-semibold">Your Cart</h1>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          {cart.length === 0 ? (
            <div>no element in the cart</div>
          ) : (
            <div className="divide-y divide-gray-400 p-4 space-y-6">
              {cart.map((item, index) => (
                <CardCart cartItem={item} key={index} />
              ))}
            </div>
          )}
        </div>
        <div className="col-span-1">
          <CardCartOrder />
        </div>
      </div>
      <div className="flex justify-between items-center shadow bg-blue-950 px-10 py-5 rounded-xl w-full">
        <div className="flex flex-col text-white text-2xl font-semibold">
          <span>STAY CONNECT ABOUT OUR </span>
          <span>LATEST OFFERS</span>
        </div>

        <form action="" className="flex flex-col gap-2">
          <input
            type="text"
            placeholder="Enter your email address"
            className="text-gray-950 bg-white shadow outline-none rounded-3xl px-6 py-2"
          />
          <input
            type="text"
            placeholder="Subscribe to NewsLetter"
            className="text-gray-950 bg-white shadow outline-none rounded-3xl px-6 py-2"
          />
        </form>
      </div>
    </div>
  );
};

export default CartSection;
