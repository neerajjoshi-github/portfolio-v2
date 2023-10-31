import type { Metadata } from "next";
import { Inter, Rock_Salt } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const rockSalt = Rock_Salt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rock-salt",
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
      <body className={`${inter.className} ${rockSalt.variable}`}>
        {children}
      </body>
    </html>
  );
}
