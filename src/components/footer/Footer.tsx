import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-preset-blue w-full text-white'>
            <div className='grid grid-flow-row md:grid-flow-col py-3 px-3 gap-5 md:gap-10'>
                <section>
                    <Image
                        src={`/vectors/logo-white.svg`}
                        alt='logo'
                        width={750}
                        height={250}
                        className='object-cover w-52 md:w-80 '
                    />
                    <div className='mt-3'>
                        <h1 className='font-bold text-base md:text-lg'>
                            BPJS Kesehatan Kota Semarang
                        </h1>
                        <Link
                            href={`https://maps.app.goo.gl/2zLYxrgz25qmG4zm6`}
                            className='text-gray-300'>
                            Alamat: Jl. Sultan Agung No.144, Kaliwiru, Kec. Candisari, Kota Semarang, Jawa Tengah 50232
                        </Link>
                    </div>
                </section>
                <section>
                    <h1 className='font-bold text-base md:text-lg'>
                        Jaminan Kesehatan
                    </h1>
                    <ul>
                        <li>Peserta</li>
                        <li>Manfaat</li>
                        <li>Iuran</li>
                        <li>Prosedur Pendaftaran</li>
                    </ul>
                </section>
                <section>
                    <h1 className='font-bold text-base md:text-lg'>
                        Layanan
                    </h1>
                    <ul>
                        <li>Alamat BPJS Kesehatan</li>
                        <li>Autodebit</li>
                        <li>Program Rehab</li>
                        <li>Program Pesiar</li>
                    </ul>
                </section>
                <section>
                    <h1 className='font-bold text-base md:text-lg'>
                        Informasi
                    </h1>
                    <ul>
                        <li>Call center 165</li>
                        <li>Pandawa</li>
                        <li>Mobile JKN</li>
                    </ul>
                </section>
            </div>
        </footer>
    )
}

export default Footer