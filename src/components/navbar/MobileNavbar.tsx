'use client'
import { RxHamburgerMenu } from "react-icons/rx";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { itemsNavbar } from "./utils/data";
import randomizeToken from "../utils/randomizeToken";
import { useState } from "react";
import Link from "next/link";

const MobileNavbar = () => {
    const [sideBarOpen, setSideBarOpen] = useState(false)
    const handleSideBarClick = () => {
        setSideBarOpen(!sideBarOpen)
    }
    const uuid = randomizeToken()
    return (
        <div className="flex md:hidden">
            <Sheet>
                <SheetTrigger
                    onClick={handleSideBarClick}
                    name="hamburger menu"
                    className="border rounded-md shadow-gray-800 shadow-md py-1 px-3 "
                >
                    <RxHamburgerMenu />
                </SheetTrigger>
                <SheetContent className="w-1/2">
                    {itemsNavbar.map((item, i) => (
                        <SheetHeader 
                        key={`[${item.title}] - ${uuid}`}
                        >
                            <SheetTitle>
                                {item.title}
                            </SheetTitle>
                            {item.lists.map((list, idx) => (
                                <SheetDescription
                                    key={`list-${list} [${idx}]`}
                                    className="text-blue-700 hover:underline underline-offset-1"
                                >
                                    <Link
                                        href={list.toLowerCase()}
                                    >
                                        {list}
                                    </Link>
                                </SheetDescription>
                            ))}
                        </SheetHeader>
                    ))}
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNavbar