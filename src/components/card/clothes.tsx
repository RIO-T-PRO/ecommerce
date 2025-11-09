const Clothes = () => {
  return (
    <div className="flex flex-col md:flex-row w-full bg-white rounded-lg overflow-hidden shadow border border-gray-300">
      {/* Text Content */}
      <div className="flex flex-col space-y-3 p-6 md:p-8 md:flex-1">
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-800">
          Best Offer Every Man's Items
        </h1>
        <p className="text-gray-500 text-sm sm:text-base md:text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have
        </p>

        {/* Button */}
        <button className="mt-3 md:mt-4 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg md:text-xl font-semibold text-white bg-rose-400 rounded-md hover:bg-rose-500 transition-colors w-full sm:w-auto">
          Buy Now
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/3 flex-1">
        <img
          src="/images/img-3.png"
          alt="Man Clothes"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Clothes;
