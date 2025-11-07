import { useCart } from "@/contexts/cart-context";
import { Product } from "@/data/product";

export const handleCart = () => {
  const { cart, setCart } = useCart();

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, { ...product, cartQuantity: 1 }]);
  };

  const increaseQuanity = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) {
      console.error("error finding the product");
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
      )
    );
  };

  const decreasingQuantity = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) {
      console.error("error finding the product");
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cartQuantity: item.cartQuantity - 1 } : item
      )
    );
  };

  const deleteItem = (id: number) => {
    cart.filter((item) => item.id === id);
  };

  return {
    handleAddToCart,
    cart,
    increaseQuanity,
    decreasingQuantity,
    deleteItem,
  };
};
