import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import localFont from "next/font/local";

import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RvSaleSlider from "@/components/RvSaleSlider";
import Partners from "@/components/Partners";

import "./globals.css";

export const metadata: Metadata = {
  title: "DeMartini RV Sales - New and Used Motorhome Dealer",
  description:
    "DeMartini RV Sales, RV Dealer in California, New and Used motorhomes, Huge Inventory and Great Prices on the best brands! Newmar, Dynamax, Forest River, Thor, Jayco RV.",
};

// fonts

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: "400",
});
const monaSans = localFont({
  src: "../../public/fonts/Mona-Sans.woff2",
  variable: "--font-Mona-Sans",
});
const balboa = localFont({
  src: "../../public/fonts/FontsFree-Net-Balboa-W01-Bold.ttf",
  variable: "--font-balboa",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} ${monaSans.variable} ${oswald.variable} ${balboa.variable} ${roboto.variable}`}
    >
      <body>
        <Navbar />
        <Header />
        {children}
        <RvSaleSlider />
        <Partners />
        <Footer />
      </body>
    </html>
  );
}
