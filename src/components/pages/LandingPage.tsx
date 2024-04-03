'use client'
import '@/css/scroll.css'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Autoplay from "embla-carousel-autoplay"
import randomizeToken from '../utils/randomizeToken'
import Services from './landing-services/Services'
import { useRef, useState } from 'react'
import { menuBar, menuContent, menuContentImage } from '@/data-content/layanan'


const LandingPage = () => {
    const plugin = useRef(
        Autoplay({ delay: 2500, stopOnInteraction: false })
    )
    const images = [
        {
            img: '/assets/bpjs-depan-baru.jpg',
            title: 'BPJS kesehatan kota semarang'
        },
        {
            img: '/assets/antrian-pelayanan.jpg',
            title: 'Pelayanan masyarakat'
        },
        {
            img: '/assets/pelayanan-masyarakat.jpg',
            title: 'Pendaftaran BPJS'
        }
    ]
    const [selectedItem, setSelectedItem] = useState<number | null>(0)
    const handleItemClick = (item: number) => {
        setSelectedItem(item)
    }

    const uuid = randomizeToken()
    return (
        <div className='bg-gray-100 '>
            <section className='bg-preset-blue py-2 px-3 md:px-4'>
                <h1 className='font-bold text-white font-poppins text-lg md:text-2xl'>
                    BPJS Kesehatan Kota Semarang
                </h1>
            </section>
            <section className='flex flex-col md:flex-row justify-center md:justify-start '>
                <Carousel
                    plugins={[plugin.current]}
                    className="w-full z-0"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.reset}
                >
                    <CarouselContent>
                        {images.map((item, index) => (
                            <CarouselItem key={`${uuid}-img[${index + 1}]`}>
                                <div className="">
                                    <Card className=''>
                                        <CardContent
                                            className="relative w-full h-[60dvh] md:h-[80dvh] items-center justify-center p-6 rounded-md overflow-hidden"
                                        >
                                            <Image
                                                src={item.img}
                                                alt={`just images`}
                                                // width={1280}
                                                // height={960}
                                                fill
                                                // sizes='(max-width: 720px)50vw, (max-width: 1200px)50vw, 33vw'
                                                className='w-full h-full object-cover object-center hover:scale-110 ease-in-out duration-700'
                                            />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </section>
            <section>
                <Services />
            </section>
            <section>
                <div className='flex flex-col mt-3 mb-1 justify-center items-center font-fjallaOne'>
                    <h1 className='text-2xl my-2'>
                        Layanan Informasi dan Administrasi
                    </h1>
                    <section className='ring-1 ring-gray-600 bg-gray-200 rounded-full'>
                        <ul className='flex gap-2 py-1 px-2'>
                            {menuBar.map((item, i) => (
                                <li
                                    key={`menu-bar[${i}]`}
                                    onClick={() => handleItemClick(i)}
                                    className={`py-1 px-2 rounded-full cursor-pointer ${selectedItem === i ? 'bg-preset-blue text-white' : 'bg-preset-lightGray'}`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className='mt-3'>
                        {selectedItem !== null && (
                            <div className='grid grid-flow-row md:grid-cols-2 md:mx-10 md:h-80 gap-2 justify-center'>
                                <section className='flex mx-3 md:w-full justify-center items-center overflow-hidden'>
                                    <Image
                                        src={menuContentImage[selectedItem]}
                                        alt={menuContentImage[selectedItem]}
                                        width={1000}
                                        height={1000}
                                        className='w-max object-cover object-center'
                                    />
                                </section>
                                <section className='flex flex-col gap-2 mx-5 h-96 md:h-full overflow-scroll scroll-bar'>
                                    {menuContent[selectedItem].map((item, i) => (
                                        <Card
                                            key={`MENU-CONTENT-[${i}]`}
                                            className='flex flex-col'
                                        >
                                            <CardContent className='relative py-2'>
                                                <h1 className='font-poppins font-semibold'>
                                                    {item.title}
                                                </h1>
                                                <CardDescription className='font-sans'>
                                                    {item.content}
                                                </CardDescription>
                                                <div className='absolute flex self-center inset-0 w-1 pl-3 h-[100%] rounded-md bg-preset-blue/60'></div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </section>

                            </div>
                        )}
                    </section>
                </div>
            </section>
        </div>
    )
}

export default LandingPage