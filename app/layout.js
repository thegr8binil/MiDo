import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MiDo",
  description: "A modern, minimal, and accessible todo app.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className="flex items-center justify-center w-full h-screen">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
