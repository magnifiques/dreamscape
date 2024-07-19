"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <Link href="/" className="bg-white px-4 py-2 rounded-full">
        <p className="blue-gradient_text">AV</p>
      </Link>
      <nav className="flex text-lg gap-7 font-medium">
        <Link
          href="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          About
        </Link>
        <Link
          href="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
        >
          Projects
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
