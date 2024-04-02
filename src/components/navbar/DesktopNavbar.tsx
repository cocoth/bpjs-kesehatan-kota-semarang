import { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { itemsNavbar } from './utils/data'
import Link from "next/link";

const DesktopNavbar = () => {
    return (
        <div className="flex gap-4">
            {itemsNavbar.map((item, i) => (
                <div
                    key={`${item.links}-[${i + 1}]`}
                    className="hidden md:flex">
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            key={i}
                            className="flex gap-1 md:gap-3 items-center py-1 px-2 hover:border hover:border-gray-900 duration-500 ease-in-out hover:text-black  rounded-md"
                        >
                            {item.title}
                            <IoIosArrowDown />
                        </DropdownMenuTrigger>
                        <DropdownMenuSeparator />
                        <DropdownMenuContent className="flex flex-col" >
                            {item.lists.map((list, i) => (
                                <DropdownMenuItem
                                    key={`List-${i}-${list}`}
                                    className="text-lg md:text-lg font-semibold">
                                    <Link href={item.links[i]}>
                                        {list}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            ))}

        </div>
    )
}

export default DesktopNavbar