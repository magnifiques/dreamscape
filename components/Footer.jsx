import React from "react";
import Link from "next/link";
import Image from "next/image";
import { hashnnode, linkedin } from "@/assets/icons";
const Footer = () => {
  return (
    <footer className="bg-black flex flex-row justify-between items-center text-white rounded-tl-sm rounded-tr-sm px-4 py-2">
      <p>
        Designed with 💚 by{" "}
        <Link
          href="https://github.com/magnifiques"
          className="text-purple-500"
          target="_blank"
        >
          magnifiques
        </Link>
      </p>
      <div className="flex flex-row gap-4">
        <Link href="https://www.linkedin.com/in/arpit-vaghela/" target="_blank">
          <Image src={linkedin} alt="linkedIn" height={20} width={20} />
        </Link>
        <Link href="https://hashnode.com/@vapit" target="_blank">
          <Image src={hashnnode} alt="linkedIn" height={20} width={20} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
