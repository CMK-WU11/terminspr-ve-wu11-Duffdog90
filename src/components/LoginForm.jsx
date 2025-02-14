"use client"

//hentet fra repitition

import LoginAction from "@/action/loginAction";
import Link from "next/link";
import { useActionState, useEffect } from "react";


export default function LoginForm() {

    const [formState, formAction, isPending] = useActionState(LoginAction, null)
    useEffect(()=>{
        console.log("formState", formState);
        
    },[formState])


return (
    <>
    <form className="flex flex-col justify-center items-center " noValidate action={formAction} >
        <label className="flex flex-col ">
            <h2 className="text-[#EAEAEA] text-[2.5rem] mb-2">Log ind</h2>
            <span className="text-red-500 bg-[#00000085] rounded flex justify-center">{formState?.error}</span>
            <span className="text-red-500 bg-[#00000085] rounded flex justify-center">{formState?.errors?.username?._errors[0]}</span>
            <input 
            defaultValue={formState?.formData?.username} 
            className="border-2 h-[2.5rem] pl-2 mb-3 w-[17rem] bg-[#ffffffadf]" 
            name="username" 
            type="text"
            placeholder="brugernavn"
            />
            
        
            <span className="text-red-500 bg-[#00000085] rounded flex justify-center">{formState?.errors?.password?._errors[0]}</span>
            
                <input 
                defaultValue={formState?.formData?.password} 
                className="border-2 h-[2.5rem] pl-2 w-[17rem] mb-6 bg-[#ffffffadf]" 
                name="password" 
                type="password"
                placeholder="adgangskode"
                />
            
        </label>
        <button disabled={isPending} className="block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem]" type="submit">{isPending ? "Logger ind.." : "Log ind"} </button>
        <Link href="/register" className="block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] my-2">Registrer ny bruger</Link>
                <label className="w-full flex justify-center items-center mb-6">
                    <span className=" text-[#EAEAEA] text-[1.1rem] mr-2">Husk Mig</span>
                    <input name="lortebox" className="h-5 w-5" type="checkbox" />
                </label>
    </form>
    </>
    );
}