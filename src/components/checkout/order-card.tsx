"use client";

import Image from "next/image";
import { getDiscountedPrice } from "@/utils/functions";
import { CartItem } from "@/data/cart";

type OrderSummaryProps = {
  cart: CartItem[];
};

const OrderSummary = ({ cart }: OrderSummaryProps) => {
  const subTotal = cart.reduce(
    (acc, item) => acc + item.price * item.cartQuantity,
    0
  );
  const discounts = cart.reduce(
    (acc, item) =>
      acc + (item.discount ? (item.price * item.discount) / 100 : 0),
    0
  );
  const transport = cart.reduce((acc, item) => acc + item.transport, 0);
  const total = subTotal - discounts + transport;

  return (
    <div className="flex flex-col p-4 shadow border border-gray-200 rounded-2xl gap-4 bg-white">
      <h3 className="text-2xl font-bold">Order Summary</h3>

      {/* CART ITEMS */}
      <div className="flex flex-col gap-4 max-h-[400px] overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          cart.map((item) => {
            const discountedPrice = getDiscountedPrice(
              item.price,
              item.discount
            );
            return (
              <div
                key={item.id}
                className="flex gap-4 items-center border-b border-gray-200 pb-3"
              >
                <div className="relative w-20 h-20 rounded-lg overflow-hidden border border-gray-100">
                  <Image
                    src={item.image}
                    alt={item.brand}
                    fill
                    className="object-cover z-0"
                  />
                </div>

                <div className="flex flex-col flex-1">
                  <h4 className="font-semibold text-lg">{item.brand}</h4>
                  <p className="text-sm text-gray-500">
                    Qty: {item.cartQuantity}
                  </p>

                  <div className="flex gap-2 items-center">
                    <span className="font-semibold text-black">
                      ${(discountedPrice * item.cartQuantity).toFixed(2)}
                    </span>
                    {item.discount && (
                      <span className="line-through text-gray-400 text-sm">
                        ${(item.price * item.cartQuantity).toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* PRICE BREAKDOWN */}
      {cart.length > 0 && (
        <>
          <div className="divide-y divide-gray-300"></div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-lg">Subtotal</span>
              <span className="text-lg font-semibold">
                ${subTotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-lg">Discount</span>
              <span className="text-lg text-red-500 font-semibold">
                -${discounts.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 text-lg">Delivery Fee</span>
              <span className="text-lg font-semibold">
                ${transport.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="divide-y divide-gray-300"></div>

          <div className="flex justify-between items-center pt-2">
            <span className="text-xl font-bold">Total</span>
            <span className="text-xl font-bold">${total.toFixed(2)}</span>
          </div>

          {/* PAY NOW BUTTON */}
          <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition">
            Pay Now
          </button>
        </>
      )}
    </div>
  );
};

export default OrderSummary;
