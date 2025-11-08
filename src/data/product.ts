export interface Product {
  id: number;
  title: string;
  brand: string;
  image: string;
  price: number;
  discount?: number;
  quantity: number;
  transport: number;
}

export const products: Product[] = [
  {
    id: 1,
    title: "COMPUTER",
    brand: "SAMSUNG",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 500,
    discount: 2,
    quantity: 1,
    transport: 25,
  },
  {
    id: 2,
    title: "LAPTOP",
    brand: "DELL",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 750,
    discount: 12,
    quantity: 1,
    transport: 30,
  },
  {
    id: 3,
    title: "MONITOR",
    brand: "APPLE",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 300,
    discount: 4,
    quantity: 1,
    transport: 20,
  },
  {
    id: 4,
    title: "COMPUTER",
    brand: "SAMSUNG",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 500,
    quantity: 1,
    transport: 25,
  },
  {
    id: 5,
    title: "LAPTOP",
    brand: "DELL",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 750,
    quantity: 1,
    transport: 30,
  },
  {
    id: 6,
    title: "MONITOR",
    brand: "APPLE",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 300,
    discount: 4.5,
    quantity: 1,
    transport: 20,
  },
  {
    id: 7,
    title: "KEYBOARD",
    brand: "LOGITECH",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 80,
    quantity: 1,
    transport: 10,
  },
  {
    id: 8,
    title: "MOUSE",
    brand: "RAZER",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 60,
    quantity: 1,
    transport: 8,
  },
  {
    id: 9,
    title: "HEADPHONES",
    brand: "SONY",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    price: 150,
    discount: 2,
    quantity: 1,
    transport: 15,
  },
];
