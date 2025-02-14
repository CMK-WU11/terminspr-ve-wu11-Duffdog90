"use client"

import Image from "next/image"
import searchicon from "../../../../public/images/searchIcon.png"
import { useEffect, useState } from "react";
import ActivityCard from "@/components/ActivityCard";
import { libFetch } from "@/lib/libFetch";

export default function Search(){

    const [data, setData] = useState()
    const [searchValue, setSearchValue] = useState("")
    const [searchResults, setSearchResults] = useState([])


    useEffect(() => {
        async function fetchResults(){
            const response = await libFetch(`http://localhost:4000/api/v1/activities`)
            setData(response)
            console.log("fetch data", data);
        }
        fetchResults()
    },[])

    useEffect(()=>{
        const searchResults = data?.filter((item)=> item.name.toLowerCase().includes(searchValue.toLowerCase()))
        if (searchValue === "") {
            setTimeout(() => {
                setSearchResults([])
            }, 100);
        } else
        setSearchResults(searchResults)
        // console.log("search",searchResults);
    },[searchValue])



    function handleSearchValue(event) {
        setSearchValue(event.target.value);
    }
    
    
    return(
        <>
            <header className="  items-center flex bg-[#5E2E53] h-[7rem] text-[#EAEAEA] text-[2rem] px-[2rem] sticky top-0 z-[99] py-[2rem]">
                <label className="">
                    <span>Søg</span>
                    <Image className="absolute bottom-[1.4rem] right-[2.5rem]" alt="søge ikon" src={searchicon}/>
                    <input onChange={handleSearchValue} className="w-full h-[2.2rem] bg-[#ffffff40]" name="search" type="text"/>    
                </label>
            </header>
            <main className="h-[80vh] px-[1.5rem] text-[#EAEAEA] overflow-scroll">
                {searchValue ? "" : <p className="">Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</p>}
                {searchResults?.map(item =>  <ActivityCard key={item.id} activity={item} />)}
            </main>
        </>
    )
}