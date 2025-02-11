
import Header from "@/components/Header";
import KalenderCard from "@/components/KalenderCard";
import { libFetch } from "@/lib/libFetch";
import { cookies } from "next/headers";

export default async function Kalender(){

    const cookieStore = await cookies()
    const token = cookieStore.get("dans_token")
    const userid = cookieStore.get("dans_userid")
    const role = cookieStore.get("dans_role")

    console.log("cookie return", role);
    

    const response = await fetch(`http://localhost:4000/api/v1/users/${userid.value}`, {
                "method": "GET",
                "headers": {
                "Authorization": `Bearer ${token.value}`

            }
        })
    const data = await response.json()
    const activityData = data.activities

    console.log("fetch kalender data", activityData.name);
    console.log("fetch kalender data", data);
    
    return(
        <>
            <Header text="Kalender"/>
            <main className="h-[82vh] px-[1.5rem] mt-2">
                {activityData.map((item) => <KalenderCard key={item.id} activity={item} />)}
            </main>
        </>
    )
}