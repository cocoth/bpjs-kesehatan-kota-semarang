import Footer from "@/components/footer/Footer";
import LandingPage from "@/components/pages/LandingPage";
import { Card } from "@/components/ui/card";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Head>
        <meta name="google-site-verification" content="Tu0vAsVZ_cRXOx7-AqrpePn2DosjBM5VbpOJS1jeA5s" />
      </Head>
      <LandingPage />
      <div>
        <h1 className="font-bold md:text-2xl text-center my-5">
          Jadwal BPJS Kesehatan Keliling
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-3 mx-3 mb-3">
        <Card className="p-3 shadow-lg shadow-gray-800">
          <h1 className="font-bold md:text-2xl text-center md:my-5">
            Jadwal BPJS Kesehatan Keliling bulan maret
          </h1>
          <Image
            src={'/img/jadwal-bpjs-keliling-maret.jfif'}
            alt="bpjs keliling bulan maret"
            width={1000}
            height={1000}
            className="md:w-full h-auto rounded-lg"
          />
        </Card>
        <Card className="p-3 shadow-lg shadow-gray-800">
          <h1 className="font-bold md:text-2xl text-center md:my-5">
            Jadwal BPJS Kesehatan Keliling bulan mei
          </h1>
          <Image
            src={'/img/jadwal-bpjs-keliling-mei.jfif'}
            alt="bpjs keliling bulan mei"
            width={1000}
            height={1000}
            className="md:w-full h-auto rounded-lg"
          />
        </Card>
        <Card className="p-3 shadow-lg shadow-gray-800">
          <h1 className="font-bold md:text-2xl text-center md:my-5">
            Jadwal BPJS Kesehatan Keliling bulan juni
          </h1>
          <Image
            src={'/img/jadwal-bpjs-keliling-juni.jfif'}
            alt="bpjs keliling bulan juni"
            width={1000}
            height={1000}
            className="md:w-full h-auto rounded-lg"
          />
        </Card>
      </div>
      <Footer />
    </main>
  );
}
