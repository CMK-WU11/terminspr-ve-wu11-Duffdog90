"use client"


//brugt inspiration fra repetition

import { useEffect, useState } from "react";

export default function SignupButton({token, userid, id, role, minAge, maxAge, date}){


    const [isSigned, setIsSigned] = useState(false)
    const [isAge, setIsAge] = useState(false)
    const [isDate, setIsDate] = useState(false)

    
    

    async function handleDelete(){
            const userDelete = await fetch(`http://localhost:4000/api/v1/users/${userid}/activities/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            if (userDelete.ok) {
                setIsSigned(false)
            }

            
    }
        
    async function handleSignup(){

        const userResponse = await fetch(`http://localhost:4000/api/v1/users/${userid}/activities/${id}`,{
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${token}`
            },
        })
        if (userResponse.ok) {
            setIsSigned(true)
        }
        
            
        console.log("fetch", userResponse);
    }
        
    


    useEffect(()=>{
        fetch(`http://localhost:4000/api/v1/users/${userid}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            // console.log("age",maxAge)

            
            setIsSigned(data.activities.some(element => element.id === id))
            setIsDate(data.activities.some(element => element.weekday === date))
            setIsAge(data.age >= minAge && data.age <= maxAge)
            // console.log("DOES WEEKDAY MATCH??",data.activities.some(element => element.weekday === date));
            // console.log("WEEKDAY?",date);
            console.log("WEEKDAY STATE?",data);

            
            
        })
    }, [])
// function handleWeek(){
//     if (isDate && isSigned) {
//         setIsWeekday(true)
//     }else{setIsWeekday(false)}
// }
    return(
        <>
            {role !== "instructor" &&
                (isSigned
                    ? <button className="disabled:bg-gray-500 block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] absolute right-[1.5rem] bottom-[1.5rem] shadow-lg" onClick={handleDelete}>Forlad</button>
                    : <button disabled={!isAge || isDate} className="disabled:bg-gray-500 block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] absolute right-[1.5rem] bottom-[1.5rem] shadow-lg" onClick={handleSignup}>{isAge ? `Tilmeld` : `Uden for aldersgrænse`}</button>
                )}
                
                {(
                    !isSigned
                    ? <span className="bg-[#00000085]  text-[#EAEAEA] absolute right-[1.5rem] bottom-0">{!isSigned && isDate ? "Du er allerede tilmeldt noget for denne dag" : ""}</span> 
                    : null
            )}
        </>
    )
}