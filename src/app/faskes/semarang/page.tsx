'use client'
import '@/css/scroll.css'
import ReadCSV from '@/components/utils/ReadCSV'
import React, { useState } from 'react'
import { Card } from '@/components/ui/card'

const titleFaskes = [
    'Dokter Perorangan',
    'Dokter Gigi',
    'Rumah Sakit',
    'Klinik',
    'Puskesmas',
]

const dataFaskes = [
    '/data/data-semarang/dokter-perorangan-semarang.csv',
    '/data/data-semarang/dokter-gigi.csv',
    '/data/data-semarang/rs-semarang.csv',
    '/data/data-semarang/klinik-semarang.csv',
    '/data/data-semarang/puskesmas.csv',
]



const page = () => {
    const [selectedItem, setSelectedItem] = useState<number | null>(0)
    const handleItemClick = (item: number) => {
        setSelectedItem(item)
    }
    return (
        <div className=''>
            <section className='flex items-center bg-preset-blue py-2 px-3 md:px-4'>
                <h1 className='text-sm md:text-2xl text-white font-bold font-poppins'>
                    Data Fasillitas Kesehatan Kota. Semarang
                </h1>
            </section>
            <div className='flex flex-col md:flex-row gap-4 mx-3 my-3'>
                <div className='flex justify-center '>
                    <section className='border md:border-none rounded-full md:rounded-none overflow-x-auto md:overflow-visible scroll-bar '>
                        <div className='flex md:flex-col justify-center gap-1 w-max md:h-max py-1 px-2'>
                            {titleFaskes.map((title, i) =>
                                <Card
                                    key={`FASKES-[${i}]`}
                                    onClick={() => handleItemClick(i)}
                                    className={`py-1 px-2 rounded-full cursor-pointer ${selectedItem === i ? 'bg-preset-blue text-white border border-preset-violet rounded-full' : 'bg-preset-lightGray'}`}

                                >
                                    {title}
                                </Card>
                            )}
                        </div>
                    </section>
                </div>
                <section
                    className='flex mx-5 justify-center my-2'
                >
                    {selectedItem !== null && (
                        <Card
                            className='flex border rounded-xl p-3 shadow-md shadow-gray-800'
                        >
                            <ReadCSV
                                data={dataFaskes[selectedItem]}
                                className='max-h-[50dvh] overflow-auto scroll-bar'
                            />
                        </Card>
                    )}
                </section>
            </div>
        </div>
    )
}

export default page