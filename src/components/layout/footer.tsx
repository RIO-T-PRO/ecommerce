import Link from "next/link";
import React from "react";
/* Import the icons from Lucide */
import { Facebook, Youtube, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: ["About Belle Mode", "Career", "B2B Digital"],
    },
    {
      title: "Support",
      links: ["Contact Us", "FAQ", "Shipping"],
    },
    {
      title: "Legal",
      links: ["Privacy Policy", "Terms", "Cookies"],
    },
    {
      title: "Connect",
      links: ["Instagram", "Twitter", "Facebook"],
    },
  ];

  /* Social Icons Data */
  const socialLinks = [
    { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={20} />, href: "#", label: "X (Twitter)" },
    { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
    { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="w-full bg-app-bg border-t border-gray-line/30 py-12 transition-colors duration-300">
      <div className="max-w-7xl  px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1 flex flex-col space-y-6">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-gradient-main ">
              Belle Mode
            </span>
            <p className="text-secondary text-sm/8 italic max-w-xs">
              "Let's Shop Beyond The boundaries"
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                /* text-secondary flips colors, hover:text-red-main uses your brand red */
                className="text-secondary hover:text-red-main transition-all hover:-translate-y-1"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col space-y-4">
              <span className="text-sm font-medium tracking-wider text-secondary/60">
                {section.title}
              </span>
              <div className="flex flex-col space-y-2">
                {section.links.map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="text-primary hover:text-red-main transition-colors text-sm/6"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7x mx-auto  px-6 lg:px-8 mt-12 pt-8 border-t border-gray-line/30 text-center">
        <p className="text-sm/6 text-secondary/60">
          © {new Date().getFullYear()} Belle Mode. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
