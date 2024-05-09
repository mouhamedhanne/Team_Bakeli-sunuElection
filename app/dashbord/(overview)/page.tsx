"use client"

import Container from "@/components/elements/container";
import GouvernementDuSenegal from "@/public/images/Gouvernement_SENEGAL.svg"
import Image from "next/image";
import {UserRoundSearch} from 'lucide-react'
import CardCandidat from "@/components/elements/cardCandidat";
import { Logo } from "@/components/logo/logo";
import { useState } from "react";

export default async function Page(){
const [search , setSeach] = useState('')

    return(<>
    
    <Container >
        
        <div className=" flex justify-between items-center  px-10">
        <Logo width={130} />
        <h1 className="font-bold text-3xl">SunuElection</h1>

        </div>
    </Container>
      
    <Container>
    <div className="p-3 flex items-center gap-5 rounded-md max-w-2xl mt-20 border-2 border-#8C8A85">

            <UserRoundSearch />
            <input value={search} 
                  className="text-md w-full placeholder-text_muted font-semibold outline-none border-none focus:border-secondary"
                  placeholder={`Recherche `}
                />
    </div>
    </Container>
    
    <Container>
        <div>
            <CardCandidat />
        </div>
    </Container>

    </>)
}