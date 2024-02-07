
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pawan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="max-w-[320px] md:max-w-2xl lg:max-w-3xl mx-auto pt-[11rem]">
          <Navbar/>
          {children}
          <Footer/>
        </main>
        </body>
    </html>
  );
}