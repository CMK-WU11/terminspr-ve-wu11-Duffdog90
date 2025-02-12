"use server"


import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export default async function CookieAction() {
    const cookieStore = await cookies()
    cookieStore.set("welcome_token", true, { maxAge: 3600})

    redirect("/aktiviteter")
}

