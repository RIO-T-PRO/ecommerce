"use client";

import CategoryCard from "@/components/card/category-card";
import { products } from "@/data/product";
import { useState } from "react";

const ProductsPage: React.FC = () => {
  const categories = ["All", ...new Set(products.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Our Products</h1>

      <div className="flex justify-center items-center gap-4 mb-4">
        {categories.map((category, index) => (
          <button
            onClick={() => setSelectedCategory(category)}
            key={index}
            className={`rounded-2xl px-4 py-1 border border-blue-950  ${
              selectedCategory === category
                ? "bg-blue-950 text-white"
                : "bg-white text-blue-950"
            } text-sm`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <CategoryCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
