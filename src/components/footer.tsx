import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMessage,
  FaPhone,
  FaX,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div>
        <h1>E-COM</h1>
        <div>
          <FaFacebook />
          <FaX />
          <FaLinkedin />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>

      <div>
        <div>
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio alias
            voluptatem beatae veritatis fugit vitae, iure qui. Nisi magnam atque
            asperiores impedit assumenda accusantium
          </p>
        </div>

        <div>
          <h2>Menu</h2>
          <ul>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
          </ul>
        </div>

        <div>
          <h2>Useful Link</h2>
          <ul>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
            <Link href="/">Home</Link>
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <div>
            <div>
              <FaLocationArrow />
              <span>DRC kinshasa</span>
            </div>

            <div>
              <FaPhone />
              <span>DRC kinshasa</span>
            </div>

            <div>
              <FaMessage />
              <span>DRC kinshasa</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
