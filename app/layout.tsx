import type { Metadata } from "next";
import { Teko } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const teko = Teko({
  variable: "--font-teko",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrbiBot | AI-Powered Crypto Trading Bot for Smarter Investments",
  description:
    "OrbiBot is an AI-driven crypto trading bot that automates your portfolio with intelligent algorithms. Trade Bitcoin, Ethereum, memecoins, and altcoins stress-free while maximizing returns. Secure, licensed, and built for beginners and experts alike.",
  keywords: [
    "OrbiBot",
    "crypto trading bot",
    "AI crypto trading",
    "automated trading",
    "Bitcoin bot",
    "Ethereum trading bot",
    "algorithmic trading",
    "crypto portfolio automation",
    "cryptocurrency investment tools",
    "copy trading",
    "DeFi trading bot",
    "blockchain AI"
  ],
  authors: [{ name: "OrbiBot Team" }],
  robots: {
    index: true,
    follow: true,
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${teko.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
