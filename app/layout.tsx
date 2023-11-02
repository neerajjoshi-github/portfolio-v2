import type { Metadata } from "next";
import { Rock_Salt, Cinzel_Decorative, Sometype_Mono } from "next/font/google";
import "./globals.css";

const nunito = Sometype_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-nunito",
});

const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rock-salt",
});

const indieFlower = Cinzel_Decorative({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-indie-flower",
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
        className={`${nunito.className} ${rockSalt.variable} ${indieFlower.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
