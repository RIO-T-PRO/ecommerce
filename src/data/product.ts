export interface Product {
  id: number;
  title: string;
  brand: string;
  image: string;
  price: number;
  discount?: number;
  quantity: number;
  transport: number;
  category: string; // added category
}

export const products: Product[] = [
  // Computers
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
    category: "Computers",
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
    category: "Computers",
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
    category: "Computers",
  },
  {
    id: 4,
    title: "LAPTOP",
    brand: "HP",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80",
    price: 680,
    quantity: 1,
    transport: 28,
    category: "Computers",
  },
  {
    id: 5,
    title: "MONITOR",
    brand: "LG",
    image:
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?auto=format&fit=crop&w=800&q=80",
    price: 320,
    discount: 5,
    quantity: 1,
    transport: 22,
    category: "Computers",
  },

  // Accessories
  {
    id: 6,
    title: "KEYBOARD",
    brand: "LOGITECH",
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?auto=format&fit=crop&w=800&q=80",
    price: 80,
    quantity: 1,
    transport: 10,
    category: "Accessories",
  },
  {
    id: 7,
    title: "MOUSE",
    brand: "RAZER",
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    price: 60,
    quantity: 1,
    transport: 8,
    category: "Accessories",
  },
  {
    id: 8,
    title: "HEADPHONES",
    brand: "SONY",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    price: 150,
    discount: 2,
    quantity: 1,
    transport: 15,
    category: "Accessories",
  },
  {
    id: 9,
    title: "CHARGER",
    brand: "ANKER",
    image:
      "https://images.unsplash.com/photo-1580894894517-2d3b27d787e7?auto=format&fit=crop&w=800&q=80",
    price: 25,
    quantity: 1,
    transport: 5,
    category: "Accessories",
  },

  // Phones
  {
    id: 10,
    title: "SMARTPHONE",
    brand: "SAMSUNG",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80",
    price: 600,
    discount: 10,
    quantity: 1,
    transport: 12,
    category: "Phones",
  },
  {
    id: 11,
    title: "SMARTPHONE",
    brand: "APPLE",
    image:
      "https://images.unsplash.com/photo-1512499617640-c2f99912b152?auto=format&fit=crop&w=800&q=80",
    price: 1000,
    discount: 5,
    quantity: 1,
    transport: 15,
    category: "Phones",
  },
  {
    id: 12,
    title: "SMARTPHONE",
    brand: "ONEPLUS",
    image:
      "https://images.unsplash.com/photo-1580910051073-3b423da7ab1e?auto=format&fit=crop&w=800&q=80",
    price: 450,
    quantity: 1,
    transport: 10,
    category: "Phones",
  },

  // Clothes
  {
    id: 13,
    title: "T-SHIRT",
    brand: "NIKE",
    image:
      "https://images.unsplash.com/photo-1583380475693-730c6f25f824?auto=format&fit=crop&w=800&q=80",
    price: 30,
    quantity: 1,
    transport: 5,
    category: "Clothes",
  },
  {
    id: 14,
    title: "JEANS",
    brand: "LEVIS",
    image:
      "https://images.unsplash.com/photo-1562158077-8fae2e3d5a0c?auto=format&fit=crop&w=800&q=80",
    price: 60,
    quantity: 1,
    transport: 6,
    category: "Clothes",
  },
  {
    id: 15,
    title: "JACKET",
    brand: "ADIDAS",
    image:
      "https://images.unsplash.com/photo-1602810317811-6b843d6e03ee?auto=format&fit=crop&w=800&q=80",
    price: 120,
    discount: 15,
    quantity: 1,
    transport: 10,
    category: "Clothes",
  },

  // More Accessories
  {
    id: 16,
    title: "SMARTWATCH",
    brand: "FITBIT",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800&q=80",
    price: 200,
    quantity: 1,
    transport: 8,
    category: "Accessories",
  },
  {
    id: 17,
    title: "EARBUDS",
    brand: "BOSE",
    image:
      "https://images.unsplash.com/photo-1600181950931-4fc2c1f06638?auto=format&fit=crop&w=800&q=80",
    price: 100,
    quantity: 1,
    transport: 6,
    category: "Accessories",
  },

  // More Phones
  {
    id: 18,
    title: "SMARTPHONE",
    brand: "XIAOMI",
    image:
      "https://images.unsplash.com/photo-1580910051073-3b423da7ab1e?auto=format&fit=crop&w=800&q=80",
    price: 350,
    quantity: 1,
    transport: 10,
    category: "Phones",
  },
  {
    id: 19,
    title: "SMARTPHONE",
    brand: "GOOGLE PIXEL",
    image:
      "https://images.unsplash.com/photo-1580910051073-3b423da7ab1e?auto=format&fit=crop&w=800&q=80",
    price: 700,
    quantity: 1,
    transport: 12,
    category: "Phones",
  },

  // More Clothes
  {
    id: 20,
    title: "HOODIE",
    brand: "PUMA",
    image:
      "https://images.unsplash.com/photo-1618354694371-f4f79b9df3a4?auto=format&fit=crop&w=800&q=80",
    price: 50,
    quantity: 1,
    transport: 7,
    category: "Clothes",
  },
];
