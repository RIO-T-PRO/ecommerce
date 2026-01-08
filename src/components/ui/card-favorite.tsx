"use client";

import React, { useState } from "react";
import { Heart } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardFavoriteProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onToggle"> {
  isFavorite?: boolean;
  onToggle?: (state: boolean) => void;
}

export const CardFavorite = ({
  className,
  isFavorite = false, // temporary
  onToggle, // temporary
  ...props
}: CardFavoriteProps) => {
  const [active, setActive] = useState(isFavorite);

  const handlePress = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newState = !active;
    setActive(newState);

    if (onToggle) onToggle(newState);
  };

  return (
    <button
      type="button"
      onClick={handlePress}
      className={cn(
        "absolute top-3 right-3 p-1 rounded-full transition-all z-10",
        "bg-secondary  border hover:scale-110 shadow-sm",
        active ? "text-red-main" : "text-foreground/40",
        className
      )}
      {...props}
    >
      <Heart
        size={16}
        fill={active ? "currentColor" : "none"}
        strokeWidth={active ? 0 : 2}
      />
    </button>
  );
};
