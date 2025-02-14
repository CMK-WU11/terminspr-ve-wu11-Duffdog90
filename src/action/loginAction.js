"use server"

//kopieret meste fra repitition

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod"

export default async function LoginAction(prevState, formData){
    console.log("formData", formData);
    const username = formData.get("username")
    const password = formData.get("password")
    const checkbox = formData.get("lortebox")

    console.log("action checkbox",checkbox);
    

    const schema = z.object({
        username: z.string().min(1, {message: "Udfyld username feltet"}),
        password: z.string().min(1, {message: "Udfyld Password feltet"})
    })

    const validate = schema.safeParse({
        username,
        password
    })

    if (!validate.success) {
        return {
            formData: {
                username,
                password
            },
            errors: validate.error.format()
        }
    }

    try {
        const response = await fetch("http://localhost:4000/auth/token", {
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
            
        })

        if (response.status === 401) { //400 error code er bad request
            return {
                formData:{
                    username,
                    password
                },
                error: "Forkert Brugernavn eller Password"
            }
        }

        const data = await response.json()
        console.log("log in data", data);

        

        const cookieStore = await cookies()
        if (checkbox === "on") {
            cookieStore.set("dans_token", data.token, { maxAge: 3600})
            cookieStore.set("dans_userid", data.userId, { maxAge: 3600}) 
            cookieStore.set("dans_role", data.role, { maxAge: 3600}) 
        }else{
            cookieStore.set("dans_token", data.token)
            cookieStore.set("dans_userid", data.userId) 
            cookieStore.set("dans_role", data.role) 
        }

        
        
    } catch (error) {
        throw new Error(error)
    }
    
    const cookieStore = await cookies()
    const role = cookieStore.get("dans_role")
    
    if (role.value === "instructor") {
        redirect("/kalender/instructor")
    }else {
        redirect("/kalender")
    }
}