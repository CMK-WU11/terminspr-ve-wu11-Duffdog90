
import Header from "@/components/Header";
import KalenderCard from "@/components/KalenderCard";
import { libFetch } from "@/lib/libFetch";
import { cookies } from "next/headers";

export default async function Instructor(){

    const cookieStore = await cookies()
    const token = cookieStore.get("dans_token")
    const userid = cookieStore.get("dans_userid")
    const role = cookieStore.get("dans_role")

    console.log("token", role);

    const data = await libFetch(`http://localhost:4000/api/v1/activities`)
    // const searchResults = data.filter((item)=> item.instructorId.contains(userid.value))

    

    console.log("fetch data instructor", data);
    // console.log("fetch data instructor search", searchResults);
    
    return(
        <>
            <Header text="Kalender"/>
            <main className="h-[82vh] px-[1.5rem]">
                {data.map((item) => <KalenderCard key={item.id} activity={item} />)
               }
            </main>
        </>
    )
}