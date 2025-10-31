// types/index.ts
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
}

export interface Slide {
  id: number;
  img1: string;
  img2: string;
}

export interface NavItem {
  label: string;
  href: string;
}
