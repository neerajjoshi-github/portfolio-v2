import type { Metadata } from "next";
import "./globals.css";
import { Rock_Salt, Bungee, Ubuntu, Rubik } from "next/font/google";

const rockSlat = Rock_Salt({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rock-salt",
});

const cinzelDecorative = Bungee({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
});

const ubuntu = Ubuntu({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-sometype-mono",
});

const rubik = Rubik({
  weight: ["700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-rubik",
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
        className={`${rockSlat.variable} ${cinzelDecorative.variable} ${rubik.variable} ${ubuntu.className}`}
      >
        {children}
      </body>
    </html>
  );
}
