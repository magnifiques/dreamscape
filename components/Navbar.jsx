"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  const links = [
    {
      href: "/about",
      name: "About",
    },
    {
      href: "/projects",
      name: "Projects",
    },
    {
      href: "/contact",
      name: "Contact",
    },
    {
      href: "/credits",
      name: "Credits",
    },
  ];
  return (
    <header className="header">
      <Link href="/" className="bg-white px-3 py-2 rounded-md shadow-xl">
        <p className="blue-gradient_text">AV</p>
      </Link>
      <nav className="hidden md:flex text-lg gap-7 font-medium">
        {links.map((link, index) => {
          const isLinkActive = pathName.startsWith(link.href);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`hover:text-pink-600 ${
                isLinkActive ? "text-blue-600" : "text-black-500"
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
      <div className="md:hidden relative">
        <button
          className="text-black-500 focus:outline-none"
          onClick={handleMenuToggle}
        >
          {/* Hamburger icon */}
          <div className="space-y-2 bg-white px-2 py-3 rounded-full shadow-xl">
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
            <span className="block w-8 h-0.5 bg-black"></span>
          </div>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-4 py-2 hover:bg-gray-100"
                onClick={handleMenuToggle}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
