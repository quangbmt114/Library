import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "./StoreProvider";
import LayoutRoot from "@/components/LayoutRoot";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <LayoutRoot>
            <ToastContainer />
            {children}
          </LayoutRoot>
        </StoreProvider>
      </body>
    </html>
  );
}
