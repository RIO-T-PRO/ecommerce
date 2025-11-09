import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaMessage,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white px-5 sm:px-10 md:px-20 py-10">
      {/* Top Section: Logo + Socials */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-5 md:space-y-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">E-COM</h1>
        <div className="flex space-x-4 text-2xl">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      {/* Main Footer Sections */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* About */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">About</h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio alias
            voluptatem beatae veritatis fugit vitae, iure qui. Nisi magnam atque
            asperiores impedit assumenda accusantium.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Menu</h2>
          <ul className="flex flex-col space-y-2 text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/computers">Computers</Link>
            <Link href="/mans-clothes">Mans Clothes</Link>
            <Link href="/women-clothes">Womans Clothes</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Useful Links</h2>
          <ul className="flex flex-col space-y-2 text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/computers">Computers</Link>
            <Link href="/mans-clothes">Mans Clothes</Link>
            <Link href="/women-clothes">Womans Clothes</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Contact</h2>
          <div className="flex flex-col space-y-2 text-gray-300">
            <div className="flex items-center space-x-2">
              <FaLocationDot />
              <span>DRC Kinshasa</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone />
              <span>+256 994543773</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaMessage />
              <span>riot@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <p className="text-center text-sm sm:text-lg">
        2025 All Rights Reserved. Implemented by{" "}
        <span className="font-semibold">RIOT-PRO-ALEX</span>
      </p>
    </footer>
  );
};

export default Footer;
