import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import NavBar from '@/components/navbar';

export const metadata: Metadata = {
  title: "AlumNex",
  description: "A Unified Alumni Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex flex-col min-h-[100dvh] ">
          <NavBar /> 
          {children} 
      </div>
      </body>
    </html>
  );
}
