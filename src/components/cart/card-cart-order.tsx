"use client";

import { useRouter } from "next/navigation";
import { handleCart } from "@/hooks/handle-cart";

const CardCartOrder = () => {
  const { cart } = handleCart();

  const router = useRouter();

  const subTotal = cart.reduce(
    (acc, item) => item.price * item.cartQuantity + acc,
    0
  );

  const discounts = cart.reduce(
    (acc, item) => (item.price * (item.discount ?? 0)) / 100 + acc,
    0
  );

  const transport = cart.reduce((acc, item) => item.transport + acc, 0);

  console.log(transport);

  const Total = subTotal - discounts + transport;
  return (
    <div className="flex flex-col p-2 shadow border border-gray-200 rounded-2xl gap-2.5">
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-bold">Order Summary</h3>
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-lg">Subtotal</span>
            <span className="text-lg font-semibold">${subTotal}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-lg">Discount</span>
            <span className="text-lg text-red-500 font-semibold">
              -${discounts}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500 text-lg">Delivery Fee</span>
            <span className="text-lg font-semibold">${transport}</span>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-400 h-0.5"></div>

      <div className="flex flex-col gap-2.5">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-lg font-semibold">${Total}</span>
        </div>

        <div className="grid grid-rows-2 gap-2.5">
          <div className="row-span-1 flex justify-between items-center">
            <input
              type="text"
              placeholder="Add promo code"
              className="w-4/5 outline-none shadow bg-white p-2 rounded-3xl"
            />
            <button className="p-2 bg-black text-white font-semibold rounded-3xl">
              Apply
            </button>
          </div>

          <button
            onClick={() => router.push("/checkout")}
            className="row-span-1 bg-black rounded-3xl text-white cursor-pointer"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCartOrder;
