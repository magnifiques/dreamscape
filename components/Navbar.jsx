"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();

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
      <nav className="flex text-lg gap-7 font-medium">
        {links.map((link, index) => {
          const isLinkActive = pathName.startsWith(link.href);
          console.log(isLinkActive);
          return (
            <Link
              key={link.name}
              href={link.href}
              className={isLinkActive ? "text-blue-600" : "text-black-500"}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Navbar;
