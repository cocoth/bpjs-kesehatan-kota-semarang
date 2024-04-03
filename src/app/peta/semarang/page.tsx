import "@/css/scroll.css"


const MapPage = () => {
    return (
        <div>
            <h1
                className="font-poppins font-bold bg-preset-blue text-white px-3 py-2 text-sm md:text-xl"
            >
                Kunjungan BPJS Kesehatan Wilayah Semarang
            </h1>
            <section
                className='flex flex-col mx-5 my-2 border rounded-xl overflow-hidden'
            >
                <iframe
                    src="/qgis2web_2024/index.html"
                    className='w-full h-[80dvh] scroll-bar'
                ></iframe>
            </section>
        </div>
    )
}

export default MapPage