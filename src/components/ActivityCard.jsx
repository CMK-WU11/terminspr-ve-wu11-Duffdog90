import Image from "next/image";
import Link from "next/link";



export default function ActivityCard({ activity }){
    return(
        <Link href={`/aktiviteter/${activity.id}`}>
            <div className="relative mt-[1rem] text-[#EAEAEA]">
                <img className="rounded-t-[2rem] rounded-l-[2rem] h-[20rem] w-full object-cover" alt="produkt billede" src={activity.asset.url}/>
                <div className="pl-6 absolute bottom-0 w-full h-[28%] text-black bg-[#e1a1e9d6] rounded-tr-[2rem] rounded-bl-[2rem] flex flex-col justify-center">
                    <h2>{activity.name}</h2>
                    <span>{activity.minAge} - {activity.maxAge} år</span>
                </div>
            </div>
        </Link>
    )
}