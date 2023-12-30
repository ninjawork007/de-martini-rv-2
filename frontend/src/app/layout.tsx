import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeMartini RV Sales - New and Used Motorhome Dealer",
  description:
    "DeMartini RV Sales, RV Dealer in California, New and Used motorhomes, Huge Inventory and Great Prices on the best brands! Newmar, Dynamax, Forest River, Thor, Jayco RV.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
