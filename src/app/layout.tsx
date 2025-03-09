import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Autobiz App - VTU Business Solution",
  description: "Kickstart your VTU business with Autobiz App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" lenis lenis-smooth">
      <body className={`${poppins.className} `}>{children}</body>
    </html>
  );
}
