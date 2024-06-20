import { Navbar } from "./components/Components/Navbar/Navbar";
import { Footer } from "./components/Components/Footer/Footer";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Witkacy",
  description: "Tribute page for Witkacy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={roboto.className}>
        {" "}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
