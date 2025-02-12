import Header from "@/components/Header";
import KalenderCard from "@/components/KalenderCard";
import { cookies } from "next/headers";

export default async function KalenderDetaljer({ params }){

    const {id} = await params

    const cookieStore = await cookies()
    const token = cookieStore.get("dans_token")
    const userid = cookieStore.get("dans_userid")
    const role = cookieStore.get("dans_role")

    // console.log("token", role);
    //http://localhost:4000/api/v1/users/${userid.value}
    //http://localhost:4000/api/v1/users/4/roster/4

        const response = await fetch(`http://localhost:4000/api/v1/activities/${id}`, {
            "method": "GET",
            "headers": {
            "Authorization": `Bearer ${token.value}`

        }
        })
        const data = await response.json()
        const userData = data.users

        console.log("fetch data instructor", data.users);
    
    return(
        <>
            <Header text={data.name}/>
            <main className="h-[82vh] px-[1.5rem] flex flex-col">
                {userData.map((item) => <span className="text-[#EAEAEA] text-[1.2rem]">{item.firstname} {item.lastname}</span>)}
            </main>
        </>
    )
}