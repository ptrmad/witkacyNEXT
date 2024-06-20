import { Navbar } from "./components/Components/Navbar/Navbar";
import { Footer } from "./components/Components/Footer/Footer";
import "./styles/globals.css";
import "./styles/theme.css";

import type { Metadata } from "next";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
