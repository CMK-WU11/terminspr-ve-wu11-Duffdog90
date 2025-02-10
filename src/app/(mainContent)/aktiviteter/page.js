import ActivityCard from "@/components/ActivityCard";
import Header from "@/components/Header";
import { libFetch } from "@/lib/libFetch";

export default async function Aktiviteter(){

    const data = await libFetch("http://localhost:4000/api/v1/activities")
    console.log("fetch data", data);
    
    return(
        <>
            <Header text="Aktiviteter"/>
            <main className="h-full px-[1.5rem]">
                {data.map(item =>  <ActivityCard key={item.id} activity={item} />)}
            </main>
        </>
    )
}