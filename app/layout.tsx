import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import Footer from "@/components/common/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const instrument_sans = Instrument_Sans({
  variable: "--font-instruments-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ctrlpad",
  description: "Ctrlpad: Make controls fast, launch apps instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", instrument_sans.variable, "font-sans")}>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
