import home from "../../public/images/home.png"
import search from "../../public/images/search.png"
import calender from "../../public/images/calender.png"
import Link from "next/link"
import Image from "next/image"
import { cookies } from "next/headers"

export default async function Footer(){

    const cookieStore = await cookies()
    // const token = cookieStore.get("dans_token")
    // const userid = cookieStore.get("dans_userid")
    let role = cookieStore.get("dans_role")
    if (role === undefined) {
        role = ""
    }

    return(
        <footer className="flex justify-between items-center h-[3.5rem] w-full bg-white px-6 mt-[1rem] sticky bottom-0 z-[99] shadow-2xl">
            <Link href="/aktiviteter">
                <Image alt="link til hjem" src={home} />
            </Link>
            <Link href="/search">
                <Image alt="link til søge side" src={search} />
            </Link>
            {role.value === "instructor" || "" ? <Link href="/kalender/instructor">
                <Image alt="link til kalender siden" src={calender} />
            </Link> :
            <Link href="/kalender">
                <Image alt="link til kalender siden" src={calender} />
            </Link>}
            
        </footer>
    )
}