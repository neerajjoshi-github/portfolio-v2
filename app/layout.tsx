import "./globals.css";
import type { Metadata } from "next";
import { Rock_Salt, Rubik, Bowlby_One_SC, Lato } from "next/font/google";

const rockSlat = Rock_Salt({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rock-salt",
  weight: ["400"],
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["400", "700", "900"],
});

const bowlbyOneSC = Bowlby_One_SC({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bowlby-one-sc",
  display: "swap",
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
        className={`${rockSlat.variable} ${bowlbyOneSC.variable} ${rubik.variable} ${lato.className}`}
      >
        {children}
      </body>
    </html>
  );
}
