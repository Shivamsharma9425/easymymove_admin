import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/Components/Topbar/Topbar";
// imprt Topbar

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        {children}</body>
    </html>
  );
}
