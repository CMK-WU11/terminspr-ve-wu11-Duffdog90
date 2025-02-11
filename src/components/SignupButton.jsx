"use client"

//brugt fra repetition

import { useEffect, useState } from "react";

export default function SignupButton({token, userid, id}){

    const [isSigned, setIsSigned] = useState(false)

    async function handleClick(){
        const userResponse = await fetch(`http://localhost:4000/api/v1/users/${userid}`, {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        const { activities } = await userResponse.json()
        const activityIndex = activities.indexOf(id)

        if (activityIndex === -1) {
            activities.push(id)
        } else {
            activities.splice(activityIndex, 1)
        }

        const response = await fetch(`http://localhost:4000/api/v1/users/${userid}/activities/${id}`,{
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "bearer " + token
            },
            body: JSON.stringify({
                activities
            })
        })
        if (response.ok) {
            setIsSigned(!isSigned)
        }
        console.log("fetch", response);
        
    }

    // useEffect(()=>{
    //     fetch(`http://localhost:4000/api/v1/users/${userid}`, {
    //         headers: {
    //             Authorization: "Bearer " + token
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(data =>{
    //         //console.log(data);
    //         setIsSigned(data.activities.some(element => element === id))
    //     })

    // }, [])

    return(
        <button className="block text-[#EAEAEA] bg-[#5E2E53] rounded-lg w-[13rem] flex justify-center items-center h-[3rem] absolute right-[1.5rem] bottom-[21.5rem]" onClick={handleClick}> {isSigned ? "Forlad" : "Tilmeld"}</button>
    )
}