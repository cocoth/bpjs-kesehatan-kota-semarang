import { Card } from "@/components/ui/card"
import ReadCSV from "@/components/utils/ReadCSV"
import "@/css/scroll.css"


const MapPage = () => {
    return (
        <div>
            <h1
                className="font-poppins font-bold bg-preset-blue text-white px-3 py-2 text-sm md:text-xl"
            >
                Kunjungan BPJS Keliling Wilayah Semarang
            </h1>
            <section
                className='flex flex-col mx-5 md:mx-10 my-2 border rounded-xl overflow-hidden'
            >
                <iframe
                    src="/qgis2web_semarang-2024/index.html"
                    className='w-full h-[80dvh] scroll-bar'
                ></iframe>
            </section>
            <section className="mx-5 mt-3 md:mx-10">
                <h1 className="font-bold font-poppins text-lg">
                    Data lengkap:
                </h1>
                <Card className="overflow-auto">
                    <ReadCSV data="/map-data/data-semarang.csv" />
                </Card>
            </section>
        </div>
    )
}

export default MapPage