import Header from "@/components/Header";
import KalenderCard from "@/components/KalenderCard";
import { cookies } from "next/headers";

export default async function KalenderDetaljer(){

    const cookieStore = await cookies()
    const token = cookieStore.get("dans_token")
    const userid = cookieStore.get("dans_userid")
    const role = cookieStore.get("dans_role")

    // console.log("token", role);
    //http://localhost:4000/api/v1/users/${userid.value}
    //http://localhost:4000/api/v1/users/4/roster/4

        const response = await fetch(`http://localhost:4000/api/v1/users/${userid.value}`, {
            "method": "GET",
            "headers": {
            "Authorization": `Bearer ${token.value}`

        }
        })
        const data = await response.json()

        console.log("fetch data instructor", data);
    
    return(
        <>
            <Header text="Kalender"/>
            <main className="h-[82vh] px-[1.5rem]">
                <h1>{data.name}</h1>
            </main>
        </>
    )
}