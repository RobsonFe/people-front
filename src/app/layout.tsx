"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./lib/client";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <QueryClientProvider client={client}>
          <Navbar />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
