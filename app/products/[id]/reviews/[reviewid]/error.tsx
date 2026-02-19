"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

interface Props{
    error:Error,
    reset:()=>void
}
export default function ErrorBoundary({error,reset}:Props){


    const router=useRouter();

    const reload=()=>{
        startTransition(()=>{
            router.refresh();
            reset();
        })
    }
    return(
        
        <div>
            Error messgae is {error.message}
            <button onClick={reload}>Try Again</button>
        </div>
    )
}