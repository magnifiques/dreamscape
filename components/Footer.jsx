import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-slate-700">
      Designed with 💚 by{" "}
      <Link href="https://github.com/magnifiques" target="_blank">
        magnifiques
      </Link>
    </footer>
  );
};

export default Footer;
