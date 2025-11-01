import React from "react";
import Link from "next/link";
import { FaBars, FaUser } from "react-icons/fa6";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 sticky top-0 bg-white/10 backdrop-blur-2xl mb-4">
      <h2 className="font-bold text-4xl">Selling</h2>
      <nav className="flex">
        <FaBars className="hidden" />
        <ul className="flex gap-4 text-xl font-semibold">
          <Link href="/">Home</Link>
          <Link href="/computers">Computers</Link>
          <Link href="/mans-clothes">Mans Clothes</Link>
          <Link href="/women-clothes">Womans Clothes</Link>
          <Link href="/contact">Contact</Link>
        </ul>
      </nav>

      <div className="flex gap-2.5 text-xl">
        <FaUser />
        <FaShoppingCart />
        <FaSearch />
      </div>
    </div>
  );
};

export default Header;
