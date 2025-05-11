import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crown clothing",
  description: "Crown Clothing Store - V2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${raleway.className} antialiased`}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
