import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Image, { ImageProps } from "next/image";
import React from "react";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden bg-secondary border border-border-input",
  {
    variants: {
      size: {
        sm: "h-6 w-6 sm:h-8 sm:w-8",
        md: "h-10 w-10 sm:h-12 sm:w-12",
        lg: "h-14 w-14 sm:h-16 sm:w-16",
        xl: "h-20 w-20 sm:h-24 sm:w-24",
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
    fill
    sizes="(max-width: 768px) 100px, 120px"
    className={cn("aspect-square object-contain", className)}
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
