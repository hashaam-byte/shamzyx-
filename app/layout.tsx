import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalRain from "@/components/backgrounds/DigitalRain";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Shamzy X — I Build What's Next",
  description: "Developer. Designer. Problem solver. I turn ideas into digital experiences that make impact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${cinzel.variable} bg-bg text-white font-mono overflow-x-hidden`}>
        <DigitalRain />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}