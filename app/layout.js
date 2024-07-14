import { Work_Sans } from "next/font/google";
import "./globals.css";

const worksans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={worksans.className}>{children}</body>
    </html>
  );
}
