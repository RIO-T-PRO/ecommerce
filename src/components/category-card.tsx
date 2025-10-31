const CategoryCard = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-2 bg-white border border-gray-300">
      <h2 className="text-2xl font-bold text-black">MOBILE</h2>
      <div>
        <img src="/images/mobile-img.png" alt="" />
      </div>

      <div className="flex items-center space-x-4">
        <button className="px-8 py-1 bg-rose-400 text-lg text-white whitespace-nowrap">
          Add To Cart
        </button>
        <span className="text-lg font-bold text-black">SAMSUNG </span>
        <span className="text-lg font-semibold text-rose-400">$500</span>
        <span className="text-lg line-through text-gray-400">$1000</span>
      </div>
    </div>
  );
};

export default CategoryCard;
