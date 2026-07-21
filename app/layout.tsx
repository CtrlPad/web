import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Footer from "@/components/common/Footer"
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({
  variable: "--font-montserrat",
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
    <html lang="en" className={cn("h-full", "antialiased", montserrat.variable, "font-sans")}>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
