import LoginForm from "@/components/LoginForm";
import Image from "next/image";
import backdrop from "../../../public/images/backdropLogin.png"
import RegisterForm from "@/components/registerForm";



export default async function Register() {




return (
    <main className="welcome-page h-[100vh] w-full flex flex-col justify-center items-center relative">
        <Image alt="baggrunds billede" className="absolute z-[1]" src={backdrop} priority />
        <div className="flex justify-center z-[99]">
            <RegisterForm  />
        </div>
    </main>
);
}
