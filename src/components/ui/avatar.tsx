import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Image, { ImageProps } from "next/image";
import React from "react";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden bg-secondary border border-border-input",
  {
    variants: {
      size: {
        sm: "h-8 w-8",
        md: "h-10 w-10",
        lg: "h-16 w-16",
      },
      shape: {
        circle: "rounded-full",
        square: "rounded-xl",
      },
    },

    defaultVariants: {
      size: "md",
      shape: "circle",
    },
  }
);

interface AvatarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {}

const Avatar = ({ className, size, shape, ...props }: AvatarProps) => (
  <div className={cn(avatarVariants({ size, shape }), className)} {...props} />
);

const AvatarImage = ({ className, src, alt, ...props }: ImageProps) => (
  <Image
    src={src}
    alt={alt || "Avatar"}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
);

const AvatarFallback = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex h-full w-full items-center justify-center bg-secondary text-foreground/40 font-medium uppercase",
      className
    )}
    {...props}
  >
    {" "}
    {children}
  </div>
);

export { Avatar, AvatarImage, AvatarFallback };
