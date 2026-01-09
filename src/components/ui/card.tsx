import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

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

const Card = ({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>) => (
  <div className={cn(cardVariants({ variant }), className)} {...props} />
);

const CardHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
);

const CardTitle = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadElement>) => (
  <h3
    className={cn("text-xl text-primary font-semibold leading-none", className)}
    {...props}
  />
);

const CardDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-sm text-secondary leading-relaxed", className)} />
);

const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 pt-0", className)} {...props} />
);

const CardFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("flex items-center p-6 pt-0 gap-2", className)}
    {...props}
  />
);

const CardDivider = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("border-t h-0.5 border-gray-line my-4 w-full", className)}
    {...props}
  />
);

const CardImage = ({ className, src, alt, ...props }: ImageProps) => (
  <div
    className={cn(
      "relative w-full aspect-square overflow-hidden border border-gray-line",
      className
    )}
  >
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover transition-transform duration-500 hover:scale-110"
      {...props}
    />
  </div>
);

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardDivider,
  CardImage,
};
