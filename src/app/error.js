"use client"

import Image from "next/image"
import backdrop from "../../public/images/backdropLogin.png"

export default function Error({ reset }){

    return(
        <>
            <main className="welcome-page h-[100vh] w-full flex flex-col justify-center items-center relative">
                <Image alt="baggrunds billede" className="absolute z-[1]" src={backdrop} priority />
                <h1 className="z-[99] text-[2rem] text-[#EAEAEA] mb-6">Noget gik galt</h1>
                <button className=" z-[99] block text-[#EAEAEA] bg-[#5E2E53] rounded-md w-[12rem] flex justify-center items-center h-[2.5rem]" onClick={() => reset()}>klik her for at prøve igen</button>
            </main>
        </>
    )
}