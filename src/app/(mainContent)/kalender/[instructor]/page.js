
import Header from "@/components/Header";
import KalenderCard from "@/components/KalenderCard";
import { libFetch } from "@/lib/libFetch";
import { cookies } from "next/headers";

export default async function Instructor(){

    const cookieStore = await cookies()
    const userid = cookieStore.get("dans_userid")

    console.log("userid", userid);
//
    const data = await libFetch(`http://localhost:4000/api/v1/activities`)


    const idMatch = data.filter(element => element.instructorId == userid.value)

    console.log("sortedID", idMatch);


    
    

    console.log("fetch data instructor", data);
    // console.log("fetch data instructor search", searchResults);
    
    return(
        <>
            <Header text="Kalender"/>
            <main className="h-[82vh] px-[1.5rem]">
                {idMatch.map((item) => <KalenderCard key={item.id} activity={item} />)}
            </main>
        </>
    )
}