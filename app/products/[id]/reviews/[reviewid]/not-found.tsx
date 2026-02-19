"use client"

import { usePathname } from "next/navigation"

export default function NotFound() {

    const pathname=usePathname();

    const productId=pathname.split("/")[2];

    const reviewid=pathname.split("/")[4];


    return (
        <>
            <h1>Not Found {reviewid} and {productId}</h1>
            <p>I  Think the page has been Moved to some Place</p>
        </>
    )
}