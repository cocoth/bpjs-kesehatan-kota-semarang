'use client'
import Image from "next/image"
import Link from "next/link";
import randomizeToken from "../utils/randomizeToken";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";


const Navbar = () => {
    const uuid = randomizeToken()
    return (
        <nav className="sticky top-0 z-10 shadow shadow-black bg-white w-full py-3">
            <div className="mx-2 md:mx-3 flex justify-between items-center">
                <Link href={'/'}>
                    <Image
                        src="/img/bpjs.png"
                        alt="logo"
                        width={700}
                        height={500}
                        priority={true}
                        className="object-cover w-40 md:w-72"
                    />
                </Link>
                <section className="flex items-center gap-2 md:gap-3 font-semibold text-lg md:text-xl cursor-pointer">
                    <Link
                        href={'/profile'}
                        className="py-1 px-2 rounded-md hover:border hover:border-gray-900 duration-500 ease-in-out"
                    >
                        Profile
                    </Link>
                    <DesktopNavbar />
                    <MobileNavbar />

                </section>
            </div >
        </nav >
    )
}

export default Navbar