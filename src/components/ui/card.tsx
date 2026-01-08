import { cva, VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import React, { FC } from "react";
import Image, { ImageProps } from "next/image";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const cardVariants = cva("relative shadow-sm transition-all overflow-hidden", {
  variants: {
    variant: {
      default:
        "bg-card border border-gray-line rounded-xl hover:border-primary/50",
      secondCard: "rounded-sm",
    },

    defaultVariant: {
      variant: "default",
    },
  },
});

export const Card = ({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>) => (
  <div className={cn(cardVariants({ variant }), className)} {...props}></div>
);

export const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  ></div>
);

export const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => (
  <h3
    className={cn("text-xl text-primary font-semibold leading-none", className)}
    {...props}
  ></h3>
);

export const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-secondary leading-relaxed", className)}></p>
);

export const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props}></div>
);

export const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex items-center p-6 pt-0 gap-2", className)}
    {...props}
  ></div>
);

export const CardDivider = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("border-t h-0.5 border-gray-line my-4 w-full", className)}
    {...props}
  ></div>
);

export const CardImage: FC<ImageProps> = ({
  className,
  src,
  alt,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative w-full aspect-video overflow-hidden border-b border-border-input bg-secondary/50",
        className
      )}
    >
      <Image
        src={src}
        alt={alt || "Product Image"}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        {...props}
      />
    </div>
  );
};
