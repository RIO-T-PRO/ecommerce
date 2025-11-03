import CardCart from "./card-cart";
import CardCartOrder from "./card-cart-order";

const CartSection = () => {
  return (
    <div className="flex flex-col space-y-6 p-10">
      <h1 className="text-4xl font-semibold">Your Cart</h1>
      <div className="flex gap-8">
        <div className="shadow border border-gray-200 p-4 rounded-2xl space-y-6">
          <CardCart />
          <CardCart />
        </div>
        <div>
          <CardCartOrder />
        </div>
      </div>
      <div className="flex justify-between items-center shadow bg-blue-950 px-10 py-5 rounded-xl">
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
