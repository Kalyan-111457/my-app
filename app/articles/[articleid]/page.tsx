import Link from "next/link"

interface Params{
    params:Promise<{articleid:string}>,
    searchParams:Promise<{lang?:"en" | "fr" | "es"}>
}

export default async function NewsArticle({params,searchParams}:Params) {

    const {articleid}=await params;

    const {lang}=await searchParams;
    return (
        <div>
            <h1>News Article Id is {articleid}</h1>
            <p>Reading lang is {lang} </p>
            <div>
                <Link href="/articles/3?lang=en">English Book</Link>
                <Link href="/articles/8?lang=fr">French Book</Link>
                <Link href="/articles/82?lang=es">Spanish Book</Link>

            </div>
        </div>
    )
}