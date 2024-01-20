import "./globals.css";
import type { Metadata } from "next";
import {
  Rock_Salt,
  Bungee,
  Ubuntu,
  Rubik,
  Creepster,
  Bowlby_One_SC,
} from "next/font/google";

const rockSlat = Rock_Salt({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rock-salt",
  weight: ["400"],
});

const cinzelDecorative = Bowlby_One_SC({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const ubuntu = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sometype-mono",
});

const rubik = Rubik({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neeraj Joshi",
  description: "Web dev portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${rockSlat.variable} ${cinzelDecorative.variable} ${ubuntu.variable} ${rubik.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
