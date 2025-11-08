import { useCart } from "@/contexts/cart-context";
import { CartItem } from "@/data/cart";
import { Product } from "@/data/product";

export const handleCart = () => {
  const { cart, setCart } = useCart();

  const updateCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const handleAddToCart = (product: Product) => {
    const newCart = [...cart, { ...product, cartQuantity: 1 }];
    updateCart(newCart);
  };

  const increaseQuanity = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) {
      console.error("error finding the product");
      return;
    }
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item
    );
    updateCart(newCart);
  };

  const decreasingQuantity = (id: number) => {
    const cartItem = cart.find((item) => item.id === id);
    if (!cartItem) {
      console.error("error finding the product");
      return;
    }
    const newCart = cart.map((item) =>
      item.id === id ? { ...item, cartQuantity: item.cartQuantity - 1 } : item
    );
    updateCart(newCart);
  };

  const deleteItem = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    updateCart(newCart);
  };

  return {
    handleAddToCart,
    cart,
    increaseQuanity,
    decreasingQuantity,
    deleteItem,
  };
};
