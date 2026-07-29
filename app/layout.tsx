import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/common/Footer";

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
    <html
      lang="en"
      dir="ltr"
      className={cn("h-full", "antialiased", instrument_sans.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
