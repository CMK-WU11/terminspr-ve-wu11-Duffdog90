


import CookieAction from "@/action/cookieAction";
import { cookies } from "next/headers";
import Link from "next/link";

export default function WelcomeLink({ text }){


    return(
        <>
        <form action={CookieAction}>
            <button className=" welcome-button block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem]">{text}</button>
        </form>
        </>
    )
}