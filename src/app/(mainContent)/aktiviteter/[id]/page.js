import WelcomeLink from "@/components/WelcomeLink";
import { libFetch } from "@/lib/libFetch";

export default async function DetailPage({ params }){

    const { id } = await params

    const data = await libFetch(`http://localhost:4000/api/v1/activities/${id}`)
        console.log("fetch details", data);

    return (
        <main className="h-[100vh]">
                <img className="h-[30rem] w-full object-cover" alt="produkt billede" src={data.asset.url}/>
                <div className="pl-6 pt-[1rem] w-full h-[28%] text-[#EAEAEA] bg-[#5E2E53] flex flex-col">
                    <h2>{data.name}</h2>
                    <span className="text-[0.7rem]">{data.minAge} - {data.maxAge} år</span>
                    <span className="text-[0.7rem]">{data.weekday} kl {data.time}</span>
                    <p>{data.description}</p>
                </div>
        </main>
    )
}