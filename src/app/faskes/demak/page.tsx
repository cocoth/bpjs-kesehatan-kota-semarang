import '@/css/scroll.css'
import ReadCSV from '@/components/utils/ReadCSV'
import React from 'react'
import { Card } from '@/components/ui/card'

const dataFaskes = [
    '/data/data-demak/dokter-Praktek-Perorangan.csv',
    '/data/data-demak/dokter-gigi.csv',
    '/data/data-demak/klinik.csv',
    '/data/data-demak/puskesmas.csv',
]

const page = () => {
    return (
        <div className=''>
            <section className='bg-preset-blue py-2 px-3 md:px-4'>
                <h1 className='text-sm md:text-2xl text-white font-bold font-poppins'>
                    Data Fasillitas Kesehatan Kab. Demak
                </h1>
            </section>
            <section className='mx-7 my-2'>
                <div className='flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-5 items-center justify-center md:justify-around'>
                    {dataFaskes.map((item, i) =>
                        <Card
                            key={`FASKES-[${i}]`}
                            className='w-full shadow-lg shadow-gray-900'
                            >
                            <ReadCSV className='max-h-52 w-full p-3 overflow-auto scroll-bar' data={item} />
                        </Card>
                    )}
                </div>
            </section>
        </div>
    )
}

export default page