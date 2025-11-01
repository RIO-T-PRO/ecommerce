import Link from "next/link";
import ComputerSection from "./computers-section";
import MobilesSection from "./mobiles-section";
import ManClothesSection from "./man-clothes-section";
import WomenClothesSection from "./women-clothes-section";

const Category = () => {
  return (
    <div>
      <div className="flex justify-around items-center bg-blue-950 px-7 py-5">
        <h2 className="font-bold text-2xl text-white">CATEGORY</h2>
        <ul className="flex space-x-4 font-semibold text-xl">
          <Link href="/">Man's Fashion</Link>
          <Link href="/">Women Fashion</Link>
          <Link href="/">Beauty</Link>
          <Link href="/">Mobiles</Link>
          <Link href="/">Computers</Link>
          <Link href="/">Watchs</Link>
          <Link href="/">Kitchen</Link>
          <Link href="/">Sports</Link>
        </ul>
      </div>
      <MobilesSection />
      <ComputerSection />
      <ManClothesSection />
      <WomenClothesSection />
    </div>
  );
};

export default Category;
