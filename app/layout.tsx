import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope, Allura } from "next/font/google";
import "./globals.css";
import { WEDDING } from "@/lib/wedding-data";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const allura = Allura({
  variable: "--font-allura",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${WEDDING.bride} & ${WEDDING.groom} — Wedding Invitation`,
  description: `Together with their families, ${WEDDING.bride} and ${WEDDING.groom} invite you to celebrate their wedding.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable} ${allura.variable}`}>
      <body>{children}</body>
    </html>
  );
}
