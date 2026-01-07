"use client";

import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const active = navLinks.map((item) => {
    const isActive = pathname === item.href;
    return isActive;
  });

  // Set mounted to true AFTER the component loads on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <div className="w-full h-16.25 bg-app-bg border-b border-gray-line/30" />
    );

  const toggleTheme = (): void => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-app-bg border-b border-gray-line/30 transition-colors duration-300">
      <div className="max-w-7xl  px-6 lg:px-12 py-3">
        <nav className="flex justify-between items-center backdrop-blur-sm">
          <span className="text-2xl text-gradient-main font-bold">
            Belle Mode
          </span>

          <div className="hidden md:flex items-center space-x-6 font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative py-1 font-medium transition-colors text-primary hover:text-red-main
                    /* Tailwind-only Underline Logic */
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-red-main
                    after:transition-all after:duration-300
                    ${isActive ? "after:w-full text-red-main" : "after:w-0"}
                    hover:after:w-full
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center space-x-5 font-medium">
            <Link
              href="/profile"
              className="text-primary hover:text-red-main transition-colors"
            >
              <User size={20} />
            </Link>

            <button
              onClick={toggleTheme}
              className="text-primary cursor-pointer flex items-center justify-center p-1 transition-all active:scale-90"
              aria-label="Toggle Theme"
            >
              {resolvedTheme === "dark" ? (
                <Moon size={20} className="text-blue-400" />
              ) : (
                <Sun size={20} className="text-amber-500" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
