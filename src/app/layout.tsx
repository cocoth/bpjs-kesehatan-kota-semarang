import type { Metadata } from "next";
import { fajllaOne, lobster, poppins, ubuntu } from "@/lib/font";
import "@/css/globals.css";
import Navbar from "@/components/navbar/Navbar";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "BPJS Kesehatan - Kota Semarang",
  description: "Website resmi BPJS Kesehatan kota semarang, pelayanan masyarakat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // redirect('/payment')
  return (
    <html lang="en">
      <body className={`${fajllaOne.variable} ${lobster.variable} ${poppins.variable} ${ubuntu.variable}`}>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PLVEW0LTSS"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());

              gtag('config', 'G-PLVEW0LTSS');
            `,
          }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
