

import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import backdrop from "../../../public/images/backdropLogin.png"
import { MdOutlineArrowBackIos } from "react-icons/md";
import Link from "next/link";




export default function Login() {
  return (
    <main className="welcome-page h-[100vh] w-full flex flex-col justify-center items-center relative">

      <Link className="absolute top-[2rem] z-[99] w-[90%]" href="/aktiviteter"><MdOutlineArrowBackIos className="w-[2.5rem] h-[2.5rem] text-[#5E2E53]"  /> </Link>
        
        <Image alt="baggrunds billede" className="absolute z-[1]" src={backdrop} priority />
        <div className="flex justify-center z-[99]">
          <LoginForm  />
        </div>

    </main>
  );
}
