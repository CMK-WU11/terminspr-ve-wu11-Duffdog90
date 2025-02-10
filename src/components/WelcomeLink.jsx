import Link from "next/link";

export default function WelcomeLink({ text, path }){
    return(
        <Link className="block text-[#EAEAEA] bg-[#5E2E53] rounded-md w-[12rem] flex justify-center items-center h-[2.5rem]" href={path}>{text}</Link>
    )
}