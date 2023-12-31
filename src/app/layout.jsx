import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Diego_",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#09091b]">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
    </html>
  );
}
