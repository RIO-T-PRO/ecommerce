"use client";

import Link from "next/link";
import { FaBars, FaUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { handleCart } from "@/hooks/handle-cart";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const { cart } = handleCart();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Computers", href: "/computers" },
    { name: "Mens Clothes", href: "/mans-clothes" },
    { name: "Womens Clothes", href: "/women-clothes" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (link: string) => {
    if (link === "/") return pathname === "/";
    return pathname.startsWith(link);
  };

  // Disable body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  // Add scroll detection for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-lg shadow-sm border-b"
          : "bg-white/80 backdrop-blur-lg"
      }`}
    >
      <div className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h2 className="font-bold text-2xl md:text-3xl text-gray-900 hover:text-red-600 transition-colors">
            Selling
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-8 text-lg font-medium">
            {links.map((link, index) => (
              <div key={index} className="flex flex-col group">
                <Link
                  className={`${
                    isActive(link.href)
                      ? "text-rose-600 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                  } transition-colors duration-200 px-2 py-1`}
                  href={link.href}
                >
                  {link.name}
                </Link>
                <span
                  className={`${
                    isActive(link.href)
                      ? "scale-x-100 bg-rose-600"
                      : "scale-x-0 group-hover:scale-x-100 bg-gray-900"
                  } transition-all duration-300 h-0.5 w-full`}
                />
              </div>
            ))}
          </ul>
        </nav>

        {/* User, Cart, Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          <Link href="/login">
            <button className="p-2 text-gray-700 hover:text-red-600 transition-colors">
              <FaUser className="text-xl" />
            </button>
          </Link>

          <Link
            href="/cart"
            className="relative p-2 text-gray-700 hover:text-red-600 transition-colors"
          >
            <FaShoppingCart className="text-xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs font-medium">
                {cart.length}
              </span>
            )}
          </Link>

          {/* Hamburger button visible on lg and below */}
          <button
            className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors text-2xl"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 h-screen z-50 lg:hidden flex ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        {/* Navigation Panel */}
        <div
          className={`h-screen w-10/12 bg-white transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-xl font-bold text-gray-900">Menu</h3>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-2xl text-gray-500 hover:text-red-600 transition-colors"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 h-full">
            <ul className="flex flex-col gap-1">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive(link.href)
                        ? "bg-red-50 text-red-600 font-semibold border-l-4 border-red-600"
                        : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* User info at bottom */}
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <Link onClick={() => setMobileOpen(false)} href="/login">
                  <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                    <FaUser className="text-gray-600" />
                  </div>
                </Link>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Guest User
                  </p>
                  <p className="text-xs text-gray-500">
                    Sign in for better experience
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Backdrop Overlay */}
        <div
          className={`flex-1 bg-black transition-opacity duration-300 ${
            mobileOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={() => setMobileOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
