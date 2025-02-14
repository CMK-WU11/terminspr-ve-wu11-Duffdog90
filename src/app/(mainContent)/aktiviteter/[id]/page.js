import SignupButton from "@/components/SignupButton";
import { libFetch } from "@/lib/libFetch";
import { cookies } from "next/headers";

export default async function DetailPage({ params }){

    const cookieStore = await cookies()
        const token = cookieStore.get("dans_token")
        const userid = cookieStore.get("dans_userid")
        const role = cookieStore.get("dans_role")

    const { id } = await params

    const data = await libFetch(`http://localhost:4000/api/v1/activities/${id}`)
        console.log("fetch details", data);


    const minAge = data.minAge
    const maxAge = data.maxAge
    const date = data.weekday
    const name = data.name



    return (
        <main className="h-[100vh]">
                <div className="relative">
                    <img className="h-[30rem] w-full object-cover" alt="produkt billede" src={data.asset.url}/>
                        {userid && token ? <SignupButton name={name} date={date} maxAge={maxAge} minAge={minAge} role={role.value} userid={userid.value} token={token.value} id={data.id} /> :
                        null}
                </div>
                <div className="pl-6 pt-[1rem] w-full h-[28%] text-[#EAEAEA] bg-[#5E2E53] flex flex-col">
                    <h2 className="text-[24px]">{data.name}</h2>
                    <span className="text-[18px]">{data.minAge} - {data.maxAge} år</span>
                    <span className="text-[18px]">{data.weekday} kl {data.time}</span>
                    <p className="text-[18px]">{data.description}</p>
                </div>
        </main>
    )
}