import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto space-y-10 my-10 px-6 ">
      {/* Title */}
      <h1 className="text-3xl text-center font-bold">CONTACT US</h1>

      {/* Form */}
      <div className="flex justify-center items-center">
        <form className="flex flex-col w-full sm:w-3/5 space-y-8 sm:space-y-12">
          <input
            type="text"
            placeholder="Name"
            className="text-lg sm:text-xl border-b-2 border-b-gray-800 w-full outline-none py-2 sm:py-3
                       focus:border-rose-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Email"
            className="text-lg sm:text-xl border-b-2 border-b-gray-800 w-full outline-none py-2 sm:py-3
                       focus:border-rose-500 transition-colors"
          />
          <input
            type="text"
            placeholder="Telephone"
            className="text-lg sm:text-xl border-b-2 border-b-gray-800 w-full outline-none py-2 sm:py-3
                       focus:border-rose-500 transition-colors"
          />
          <textarea
            name="Message"
            placeholder="Message"
            className="text-lg sm:text-xl border-b-2 border-b-gray-800 w-full h-40 sm:h-48 outline-none py-2 sm:py-3
                       focus:border-rose-500 transition-colors resize-none"
          ></textarea>
        </form>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center items-center">
        <button className="text-center px-6 sm:px-8 py-2 sm:py-3 text-lg sm:text-xl rounded-2xl bg-rose-500 text-white hover:bg-rose-600 transition-colors">
          Send
        </button>
      </div>
    </div>
  );
};

export default Page;
