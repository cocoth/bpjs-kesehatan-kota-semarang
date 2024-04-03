import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/pages/LandingPage";
import Head from "next/head";

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="google-site-verification" content="Tu0vAsVZ_cRXOx7-AqrpePn2DosjBM5VbpOJS1jeA5s" />
      </Head>
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
      <LandingPage />
      <Footer />
    </main>
  );
}
