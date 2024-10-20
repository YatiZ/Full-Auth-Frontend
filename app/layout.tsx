import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import CustomProvider from "./redux/provider";
import { Navbar, Footer } from "./components/common";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Full Auth App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CustomProvider>
        <Navbar/>
          <div>
          {children}
          </div>
        <Footer/>
        </CustomProvider>

      </body>
    </html>
  );
}
