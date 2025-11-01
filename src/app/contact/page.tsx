import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto space-y-10 my-10">
      <h2 className="text-3xl text-center font-bold text-black ">CONTACT US</h2>

      <div className="flex justify-center items-center">
        <form action="" className="flex flex-col w-3/5 space-y-12">
          <input
            type="text"
            placeholder="Name"
            className="text-xl border-b-2 border-b-gray-800 w-full outline-none"
          />
          <input
            type="text"
            placeholder="Email"
            className="text-xl border-b-2 border-b-gray-800 w-full outline-none"
          />
          <input
            type="text"
            placeholder="Telephone"
            className="text-xl border-b-2 border-b-gray-800 w-full outline-none"
          />
          <textarea
            name="Message"
            placeholder="Message"
            className="text-xl border-b-2 border-b-gray-800 w-full h-full outline-none"
          ></textarea>
        </form>
      </div>

      <div className="flex justify-center items-center">
        <button className="text-center px-8 text-xl py-2 rounded-2xl bg-rose-600 text-white">
          Send
        </button>
      </div>
    </div>
  );
};

export default Page;
