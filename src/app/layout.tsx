import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a leading study abroad consultancy that helps students achieve their dream of studying in the best universities across the globe. With expert guidance, personalized support, and a proven track record, we make your journey to success seamless and unforgettable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#f3f4f6] text-[#1e293b] font-sans selection:bg-[#1e4038] selection:text-white">
        {children}
      </body>
    </html>
  );
}
