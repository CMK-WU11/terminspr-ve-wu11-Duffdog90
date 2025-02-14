"use client"

import home from "../../public/images/home.png"
import search from "../../public/images/search.png"
import calender from "../../public/images/calender.png"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"



export default function Footer({ role }){

    const path = usePathname()

    if (role === undefined) {
        role = ""
    }



    return(
        <footer className="flex justify-between items-center h-[8vh] w-full bg-white px-6 sticky bottom-0 z-[99] shadow-2xl">
            <Link href="/aktiviteter">
                <Image className={path === "/aktiviteter" ? "bg-[#E1A1E9] rounded-full" : ""} alt="link til hjem" src={home} />
            </Link>
            <Link href="/search">
                <Image className={path === "/search" ? "bg-[#E1A1E9] rounded-full" : ""} alt="link til søge side" src={search} />
            </Link>
            {role.value === "instructor" || "" ? <Link href="/kalender/instructor">
                <Image className={path === "/kalender/instructor" ? "bg-[#E1A1E9] rounded-full" : ""} alt="link til kalender siden" src={calender} />
            </Link> :
            <Link href="/kalender">
                <Image className={path === "/kalender" ? "bg-[#E1A1E9] rounded-full" : ""} alt="link til kalender siden" src={calender} />
            </Link>}
            
        </footer>
    )
}