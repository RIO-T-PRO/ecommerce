import { CartItem } from "@/data/cart";
import { handleCart } from "@/hooks/handle-cart";
import { getDiscountedPrice } from "@/utils/functions";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa6";

type Props = {
  cartItem: CartItem;
};

const CardCart = ({ cartItem }: Props) => {
  const { increaseQuanity, decreasingQuantity, deleteItem } = handleCart();

  const discountedPrice = getDiscountedPrice(cartItem.price, cartItem.discount);

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-1 rounded-xl shadow flex justify-center items-center">
          <img
            src={cartItem.image}
            alt={cartItem.brand}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="col-span-2 space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-2xl font-bold text-black">
                {cartItem.brand}
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

            <button
              onClick={() => deleteItem(cartItem.id)}
              className="text-red-500"
            >
              <FaTrash />
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <span className="text-xl font-semibold">${discountedPrice}</span>
              {cartItem.discount && (
                <span className="text-xl line-through text-gray-400">
                  ${cartItem.price}
                </span>
              )}
            </div>

            <button className="flex gap-3 items-center px-3 py-1 rounded-2xl bg-white shadow">
              <span>
                <FaMinus onClick={() => decreasingQuantity(cartItem.id)} />
              </span>
              <span>{cartItem.cartQuantity}</span>
              <span onClick={() => increaseQuanity(cartItem.id)}>
                <FaPlus />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="divide-y divide-gray-400 h-0.5"></div>
    </div>
  );
};

export default CardCart;
