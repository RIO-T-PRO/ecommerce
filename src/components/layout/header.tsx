"use client";

import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  if (!mounted) return null; // will be replace by skeleton

  const toggleTheme = (): void => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <main className="w-full shadow sticky top-0 z-50 bg-bg-light border-b border-gray-line transition-colors duration-300">
      <div className="max-w-7xl px-6 lg:px-8 py-3">
        <nav className="flex justify-between items-center backdrop-blur-sm">
          <span className="text-xl text-gradient-main">Belle Mode</span>

          <div className="flex items-center space-x-6 text-light-primary font-medium">
            {navLinks.map((link) => (
              <Link href="#" key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="font-medium">
            <div className="flex items-center space-x-3">
              <Link href="#" className="text-light-primary">
                <User size={20} />
              </Link>
              <button
                onClick={toggleTheme}
                className="text-light-primary cursor-pointer flex items-center space-x-3"
              >
                {resolvedTheme === "dark" ? (
                  <Moon size={20} />
                ) : (
                  <Sun size={20} />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
};

export default Header;
