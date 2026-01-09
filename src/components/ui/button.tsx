import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-foreground hover:bg-primary/90",
        secondary: "bg-secondary text-foreground hover:bg-secondary/80",
        ghost: "hover:bg-foreground/50 hover:text-foreground/80",
        outline:
          "border border-border-input bg-secondary hover:bg-gray-line hover:text-gray-line",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-11 px-8 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = ({ className, variant, size, ...props }: ButtonProps) => (
  <button
    className={cn(buttonVariants({ variant, size }), className)}
    {...props}
  />
);

export default Button;
