import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Home",
  description: "Ayush's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#131313] text-[#EEEEEE]">
        {/* <Navbar/> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
