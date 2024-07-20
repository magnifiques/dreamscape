import { Work_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loader from "@/components/Loader";
const worksans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "DreamScape by Arpit Vaghela",
  description:
    "Welcome to Arpit Vaghela's portfolio! Dive into my world of 3D web development, where creativity meets technology. Explore interactive 3D models, innovative web applications, and projects that showcase my skills in web development and design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  );
}
