import Link from "next/link";

export default function WelcomeLink({ text, path }){
    return(
        <Link className="block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem]" href={path}>{text}</Link>
    )
}