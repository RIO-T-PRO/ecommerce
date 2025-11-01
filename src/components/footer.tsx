import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaLocationDot,
  FaMessage,
  FaPhone,
  FaTwitter,
  FaX,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col px-20 pt-20 pb-5 bg-blue-950">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-white text-5xl font-bold">E-COM</h1>
        <div className="flex space-x-4 text-white text-2xl">
          <FaFacebook />
          <FaTwitter />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-10 mb-15 ">
        <div className="col-span-2 space-y-2">
          <h2 className="text-3xl font-bold text-white">About</h2>
          <p className="text-gray-300 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio alias
            voluptatem beatae veritatis fugit vitae, iure qui. Nisi magnam atque
            asperiores impedit assumenda accusantium
          </p>
        </div>

        <div className="col-span-1 space-y-2">
          <h2 className="text-3xl font-bold text-white">Menu</h2>
          <ul className="flex flex-col space-y-1.5 text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/computers">Computers</Link>
            <Link href="/mans-clothes">Mans Clothes</Link>
            <Link href="/women-clothes">Womans Clothes</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>

        <div className="col-span-1 space-y-2">
          <h2 className="text-3xl font-bold text-white">Useful Link</h2>
          <ul className="flex flex-col space-y-1.5 text-gray-300">
            <Link href="/">Home</Link>
            <Link href="/computers">Computers</Link>
            <Link href="/mans-clothes">Mans Clothes</Link>
            <Link href="/women-clothes">Womans Clothes</Link>
            <Link href="/contact">Contact</Link>
          </ul>
        </div>

        <div className="col-span-1 space-y-2">
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <div className="flex flex-col space-y-1.5 text-gray-300">
            <div className="flex items-center space-x-2">
              <FaLocationDot />
              <span>DRC kinshasa</span>
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
      <p className="text-center text-white text-lg">
        2025 All Rights Reserved. Implement by <span>RIOT-PRO-ALEX</span>{" "}
      </p>
    </div>
  );
};

export default Footer;
