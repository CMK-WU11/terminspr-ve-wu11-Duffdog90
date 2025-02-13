"use client"

import Image from "next/image"
import searchicon from "../../public/images/searchIcon.png"
import { useState } from "react";


export default function SearchHeader(){

    const [searchValue, setSearchValue] = useState("")
    
    function handleSearchValue(event) {
        setSearchValue(event.target.value);
    }
    console.log("search value",searchValue)

    return(
        <header className=" items-center flex bg-[#5E2E53] h-[10vh] text-[#EAEAEA] text-[2rem] px-[2rem] sticky top-0 z-[99] py-[2rem]">
                <label className="">
                    <span>Søg</span>
                    <Image className="absolute bottom-[0.8rem] right-[0.5rem]" alt="søge ikon" src={searchicon}/>
                    <input onChange={handleSearchValue} className="w-full h-[2.2rem] bg-[#ffffff40]" name="search" type="text"/>    
                </label>
        </header>
    )
}