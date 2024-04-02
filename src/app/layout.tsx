import type { Metadata } from "next";
import { fajllaOne, lobster, poppins, ubuntu } from "@/lib/font";
import "@/css/globals.css";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "BPJS Kesehatan - Kota Semarang",
  description: "Website resmi BPJS Kesehatan kota semarang, pelayanan masyarakat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fajllaOne.variable} ${lobster.variable} ${poppins.variable} ${ubuntu.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
