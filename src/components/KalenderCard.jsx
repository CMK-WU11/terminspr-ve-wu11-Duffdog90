import { cookies } from "next/headers";
import Link from "next/link";


export default async function KalenderCard({ activity }){

    const cookieStore = await cookies()
    const role = cookieStore.get("dans_role")

    return(
        <>
            {role.value === "instructor" ? <Link href={`/kalender-detaljer/${activity.id}`}>
                <div className="mb-6 text-[#EAEAEA] pl-6 w-[100%] h-[6rem] text-black bg-[#EAEAEA] flex flex-col justify-center rounded-lg">
                        <h2 className="text-[1.8rem]">{activity.name}</h2>
                        <span className="text-[1.1rem]">{activity.weekday} {activity.time}</span>
                </div>
            </Link> : 
            <Link href={`/aktiviteter/${activity.id}`}>
                <div className="mb-6 text-[#EAEAEA] pl-6 w-[100%] h-[6rem] text-black bg-[#EAEAEA] flex flex-col justify-center rounded-lg">
                    <h2 className="text-[1.8rem]">{activity.name}</h2>
                    <span className="text-[1.1rem]">{activity.weekday} {activity.time}</span>
                </div>
            </Link>}

        </>
    )
}