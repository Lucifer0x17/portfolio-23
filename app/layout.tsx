import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Koulen } from "next/font/google";

export const metadata: Metadata = {
  title: "Home",
  description: "Ayush's Portfolio",
};

const koulen = Koulen({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#131313] text-[#EEEEEE]">
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
