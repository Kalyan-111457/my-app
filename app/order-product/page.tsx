"use client"

import { useRouter } from "next/navigation";

export default function OrderProduct(){

    const router=useRouter();

    const handleclick=()=>{
        console.log("Placing Your Order");
        router.push("/");
    }

    return(
        <>

        <h1>Order Product</h1>

        <button onClick={handleclick}>PlaceOrder</button>
        
        
        </>
    )
}