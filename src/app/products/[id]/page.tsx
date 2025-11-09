"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { products, Product } from "@/data/product";
import { handleCart } from "@/hooks/handle-cart";
import { getDiscountedPrice } from "@/utils/functions";

const ProductDetails = () => {
  const params = useParams();
  const id = Number(params.id);

  const product: Product | undefined = products.find((p) => p.id === id);

  const {
    cart,
    handleAddToCart,
    increaseQuanity,
    decreasingQuantity,
    deleteItem,
  } = handleCart();

  const CardDetails = cart.find((item) => item.id === id);
  const isInCart = Boolean(CardDetails);

  if (!product) {
    return (
      <div className="font-sans text-gray-800 p-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Product Not Found</h2>
        <Link
          href="/products"
          className="px-6 py-2 rounded-full bg-rose-500 text-white font-semibold hover:bg-rose-600 transition"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const discountedPrice = getDiscountedPrice(product.price, product.discount);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 sm:p-10">
      <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-5xl overflow-hidden">
        {/* Product Image */}
        <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center h-80 md:h-[480px]">
          <img
            src={product.image}
            alt={product.brand}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="p-6 md:p-10 flex flex-col justify-center w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-500 text-lg">{product.brand}</p>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold text-rose-500">
              ${discountedPrice}
            </span>
            {product.discount && (
              <span className="line-through text-gray-400 text-lg">
                ${product.price}
              </span>
            )}
          </div>

          <p className="text-gray-700 text-base leading-relaxed">
            This is a short product description that explains the key features
            and highlights of the item. Perfect for showing off your product.
          </p>

          {/* Add to Cart / Quantity Controls */}
          <div className="mt-6 w-full md:w-3/4">
            {isInCart ? (
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center justify-between flex-1 bg-rose-400 rounded-md px-3 py-2">
                  <button
                    disabled={CardDetails?.cartQuantity === 1}
                    onClick={() => decreasingQuantity(product.id)}
                    className="text-white text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaMinus />
                  </button>

                  {/* Quantity Display */}
                  <span className="text-white text-lg font-medium px-3">
                    {CardDetails?.cartQuantity}
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
                className="w-full py-3 bg-rose-400 text-white text-lg rounded-md hover:bg-rose-500 transition-colors"
              >
                Add To Cart
              </button>
            )}
          </div>

          {/* Back Link */}
          <div className="mt-8">
            <Link
              href="/products"
              className="text-rose-500 hover:text-rose-600 font-semibold text-base transition-colors"
            >
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
