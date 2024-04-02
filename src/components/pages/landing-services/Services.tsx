import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    const vectors = [
        {
            image: '/vectors/customerserviceman.svg',
            number: '1600+',
            description: 'Pelayanan Publik',
            hover: 'kami telah melayani masyarakat lebih dari 1600 per tahun',
        },
        {
            image: '/vectors/medical-icon.svg',
            number: '2',
            description: 'Wilayah Kerja',
            hover: 'Demak dan Semarang merupakan wilayah kerja kami',
        },
        {
            image: '/vectors/bpjs-car.png',
            number: '300+',
            description: 'Kunjugan Kecamatan',
            hover: 'kami telah melakukan kunjungan kerja lebih dari 300 kali dalam setahun',
        },
        {
            image: '/vectors/trusted.svg',
            number: '1500+',
            description: 'Kepercayaan Pelayanan',
            hover: 'kami di percaya lebih dari 1500 orang',
        },


    ]

    return (
        <div className='flex flex-col md:grid md:grid-flow-col justify-center items-center py-2 md:py-4 px-2 overflow-hidden bg-preset-blue rounded-md'>
            <section className='flex md:mx-3 my-2 md:mr-3' >
                <h1 className='w-max font-fjallaOne text-3xl text-white uppercase'>
                    Pencapaian Kami
                </h1>
            </section>
            <section className='grid grid-cols-2 md:flex gap-2 px-1 md:px-4 justify-center items-center'>
                {vectors.map((item, i) => (
                    <div
                        key={`ID-${i}-${item.description}`}
                        className='group grid grid-flow-col md:flex md:flex-col justify-start md:justify-center items-center space-x-3 py-1 px-2 md:py-3 min-h-24 lg:min-w-52 bg-white rounded-lg  shadow-lg shadow-gray-900/70 cursor-pointer hover:border hover:border-preset-blue hover:scale-105 ease-in-out duration-700'
                    >
                        <section
                            className={`grid items-center justify-center`}
                        >
                            <div className='relative flex items-center justify-center w-10 h-10 md:h-32 md:w-32 bg-preset-blue rounded-full overflow-hidden shadow-lg shadow-gray-800/70 group-hover:scale-110 ease-in-out duration-700 delay-300'>
                                <Image
                                    src={item.image}
                                    alt={item.description}
                                    width={500}
                                    height={500}
                                    className='object-cover object-center'
                                />
                            </div>
                        </section>
                        <section className='md:mt-3 px-1 md:px-2'>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <div className='grid grid-flow-row w-min sm:w-full justify-center items-center text-center font-poppins'>
                                            <h1 className='font-bold text-lg md:text-xl'>
                                                {item.number}
                                            </h1>
                                            <p className='flex text-gray-700 text-sm md:text-base'>
                                                {item.description}
                                            </p>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p className=' max-w-44 text-center'>
                                            {item.hover}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </section>
                    </div>
                ))}

            </section>
        </div>
    )
}

export default Services