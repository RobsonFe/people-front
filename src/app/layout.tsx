"use client";
// import "jsvectormap/dist/css/jsvectormap.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/jsvectormap@latest/dist/css/jsvectormap.min.css"
/>;

import "flatpickr/dist/flatpickr.min.css";
import "nouislider/dist/nouislider.css";
import "dropzone/dist/dropzone.css";
import "@/css/satoshi.css";
import "@/css/simple-datatables.css";
import "@/css/style.css";
import React, { useEffect, useState } from "react";
import Loader from "./components/common/Loader";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "./lib/client";
import Navbar from "./layout/navbar";
import Footer from "./layout/footer";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  // const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="pt-br">
      <body suppressHydrationWarning={true}>
        <QueryClientProvider client={client}>
          <div className="dark:bg-boxdark-2 dark:text-bodydark">
            <Navbar />
            {/* <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
            {loading ? <Loader /> : children}
            <Footer />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
