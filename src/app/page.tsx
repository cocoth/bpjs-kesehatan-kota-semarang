import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/pages/LandingPage";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="google-site-verification" content="Tu0vAsVZ_cRXOx7-AqrpePn2DosjBM5VbpOJS1jeA5s" />
      </Head>
      <LandingPage />
      <Footer />
    </main>
  );
}
