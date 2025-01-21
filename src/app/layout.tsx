import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import { ActiveSectionContextProvider } from "@/contexts/ActiveSectionContextProvider";

const inter = Inter({ subsets : ["latin"], variable: "--font-sans"});
const calistoga = Calistoga({ subsets: ["latin"], variable: "--font-serif", weight: ["400"]});

export const metadata: Metadata = {
  title: "My Better Portfolio",
  description: "Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
        <ActiveSectionContextProvider>
        {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
