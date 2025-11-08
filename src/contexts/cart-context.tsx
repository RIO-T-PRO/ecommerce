"use client";

import { CartItem } from "@/data/cart";
import React, { createContext, useContext, useEffect, useState } from "react";

type IContext = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
};

type Props = {
  children: React.ReactNode;
};

const defaultCartContext: IContext = {
  cart: [],
  setCart: () => {
    console.warn("CartProvider not found");
  },
};

const CartContext = createContext<IContext>(defaultCartContext);

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(parsedCart);
      } catch (error) {
        console.error("error fetching the cart");
      }
    }
  }, []);

  const value: IContext = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
