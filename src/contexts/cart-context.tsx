"use client";

import { CartItem } from "@/data/cart";
import React, { createContext, useContext, useState } from "react";

type IContext = {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  //   addToCart: (item: CartItem) => void;
  //   removeFromCart: (id: string) => void;
  //   updateQuantity: (id: string, quantity: number) => void;
  //   clearCart: () => void;
  //   getTotalItems: () => number;
  //   getTotalPrice: () => number;
};

type Props = {
  children: React.ReactNode;
};

// Default cart functions
const defaultCartContext: IContext = {
  cart: [],
  setCart: () => {
    console.warn("CartProvider not found");
  },
  //   addToCart: () => {
  //     console.warn("CartProvider not found");
  //   },
  //   removeFromCart: () => {
  //     console.warn("CartProvider not found");
  //   },
  //   updateQuantity: () => {
  //     console.warn("CartProvider not found");
  //   },
  //   clearCart: () => {
  //     console.warn("CartProvider not found");
  //   },
  //   getTotalItems: () => {
  //     console.warn("CartProvider not found");
  //     return 0;
  //   },
  //   getTotalPrice: () => {
  //     console.warn("CartProvider not found");
  //     return 0;
  //   },
};

const CartContext = createContext<IContext>(defaultCartContext);

const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  //   const addToCart = (item: CartItem) => {
  //     setCart(prevCart => {
  //       const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
  //       if (existingItem) {
  //         return prevCart.map(cartItem =>
  //           cartItem.id === item.id
  //             ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
  //             : cartItem
  //         );
  //       }
  //       return [...prevCart, item];
  //     });
  //   };

  //   const removeFromCart = (id: string) => {
  //     setCart(prevCart => prevCart.filter(item => item.id !== id));
  //   };

  //   const updateQuantity = (id: string, quantity: number) => {
  //     if (quantity <= 0) {
  //       removeFromCart(id);
  //       return;
  //     }
  //     setCart(prevCart =>
  //       prevCart.map(item =>
  //         item.id === id ? { ...item, quantity } : item
  //       )
  //     );
  //   };

  //   const clearCart = () => {
  //     setCart([]);
  //   };

  //   const getTotalItems = () => {
  //     return cart.reduce((total, item) => total + item.quantity, 0);
  //   };

  //   const getTotalPrice = () => {
  //     return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  //   };

  const value: IContext = {
    cart,
    setCart,
    // addToCart,
    // removeFromCart,
    // updateQuantity,
    // clearCart,
    // getTotalItems,
    // getTotalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;

export const useCart = () => useContext(CartContext);
