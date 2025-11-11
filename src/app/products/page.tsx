"use client";

import CategoryCard from "@/components/card/category-card";
import { Product, products } from "@/data/product";
import { ChangeEvent, useState } from "react";

const ProductsPage: React.FC = () => {
  const categories = ["All", ...new Set(products.map((item) => item.category))];
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">Our Products</h1>

      <div className="flex justify-center items-center gap-4 mb-4">
        {categories.map((category, index) => (
          <button
            onClick={() => setSelectedCategory(category)}
            key={index}
            className={`rounded-2xl px-4 py-1 border border-blue-950 ${
              selectedCategory === category
                ? "bg-blue-950 text-white"
                : "bg-white text-blue-950"
            } text-sm`}
          >
            {category}
          </button>
        ))}
      </div>

      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
        className="px-4 py-2 border border-zinc-700 w-sm rounded-3xl mb-4 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <CategoryCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
