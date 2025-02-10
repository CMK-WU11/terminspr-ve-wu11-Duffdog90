import home from "../../public/images/home.png"
import search from "../../public/images/search.png"
import calender from "../../public/images/calender.png"
import Link from "next/link"
import Image from "next/image"

export default function Footer(){
    return(
        <footer className="flex justify-between items-center h-[3.5rem] w-full bg-white px-6 mt-[1rem] sticky bottom-0 z-[99] shadow-2xl">
            <Link href="/aktiviteter">
                <Image alt="link til hjem" src={home} />
            </Link>
            <Link href="/search">
                <Image alt="link til søge side" src={search} />
            </Link>
            <Link href="/calender">
                <Image alt="link til kalender siden" src={calender} />
            </Link>
        </footer>
    )
}