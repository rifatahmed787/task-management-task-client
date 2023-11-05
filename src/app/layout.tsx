"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <Navbar />
          <div className="min-h-screen pt-20">{children}</div>
          <Footer />
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
