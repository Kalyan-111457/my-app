1.Next js is a react framework it is used to dvelop production level web interfaces

2.Difference between React and Next js

--->1.Routing
---->Api Routes
---->Rendering Flexibility (client side routing and server side routing)
--->Stream line data Fectching

1.npx create-next-app@latest 

to run use this command 

2.npm run dev 


Components has classified into 2 types

1.Server Component 

2.client Components

Server Side Components

-->By default next js treat all components as server components
-->these components can perform server side tasks like reading files or fetching data
   directly from the database
-->they cannot use react hooks for interaction

ClientComponent
--->for client component ,you will need to add "use client" directive at the top of your component life
--->client component cannot Perorm server Side tasks



Routing

-->Next js  has a file -system based routing System
-->Urls can access in your browser are determined by how you organize your files and folders in your Code


Pratice Code Params Dynamice Routing


export default async function ProductListItems({params}:{params:Promise<{id:string}>}){

    const productid=(await params).id;
    return(
        <h1>
            The Id is {productid};
        </h1>
    )
}


Task:localhost:3000/product/1/reviews/4



Answer

export default async  function Reviews({params}:{params:Promise<{reviewid:string,id:string}>}){


    const{reviewid,id}=await params;

    return(
        <>
        <h1>The data is {reviewid} and product id is {id}</h1>
               
        </>
    )
}



Catch All Segments Route:it handles all routes in a single file 


docs/...[slug]


we can access that slug be globally 

localhost:3000/docs/anything  that was show whatever present in that slug file


Example Pratice


export default async function Docs({params}:{params:Promise<{slug:string[]}>}){

    const {slug}=await params;
    
        if(slug?.length===2){
            return(
                <h1>Viewing docs {slug[0]} and {slug[1]}</h1>
            )
        }
        else if(slug?.length===1){
            return(
                <h1>Viewing docs {slug[0]}</h1>
            )
        }

        return <h1>Docs Home Page</h1>
    
}




404 Page write in profile


export default function NotFound() {
    return (
        <>
            <h2>Page Not Found</h2>
            <p>Could Not Found the Resourcse Source</p>

        </>
    )


}



import this in app


localhost:3000/product/[id]/reviews/[reviewid]

import NotFound from "@/app/not-found";

export default async function ReviewPage({params}:{params:Promise<{id:string,reviewid:string}>}){

    const {id,reviewid}=await params;

    if(parseInt(id)>1000){
        return NotFound();
    }

    return(
        <h3>
            
            {id} and {reviewid}
        </h3>
    )

}


UsePathname Usage :to get the details of the Url   

http://localhost:3000/products/4/reviews/4 i placd both page.tsx and notfound.tsx in reviewid

NotFound.tsx

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


Page.tsx


import { notFound } from "next/navigation";
export default async function ReviewsPage({params}:{params:Promise<{id:string,reviewid:string}>}){

    const{id,reviewid}=await params;

    if(parseInt(id)<1000){
        return notFound();
    }

    return(
        <>
        {id} is and review is {reviewid} 
        </>
    )
}



PrivateRouters

A way to tell the Next.js  "Hey this folder is Just for the internal Stuff-donot include it in the routing System"

Add UnderScore at Start of the folder Name


even though u write _Lib/page.tsx it will not show in the browser


because of this we can maintain the Consitency of the Project 


if u actually want underscore in the url ,use the %5f instead .that is just url encoded Version


RouteGroup

for maintain the organization place use the (folder) approach



Layout


import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My App",
  description: "Built with Next.js App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>This is the header Tag</header>
        {children}
        <footer>This is the Footer Tag</footer>
      </body>
    </html>
  );
}



Routing Meta Data

The Meta Data API in next js is a powerful feature that lets use define metadata for each page

Two Ways to handle Metadata in layout.tsx or page.tsx files

-->export a static metadata Object
-->export a dynamic generateMetaData Function


Dynamic Meta Data 


import { Metadata } from "next";

type Props={
    params:Promise<{id:string}>
}


export const generateMetadata=async({params}:Props):Promise<Metadata>=>{

    const id=(await params).id;
    return{
        title:`Product ${id}`
    }

}



export default async function ProductListItems({params}:Props){

    const productid=(await params).id;
    return(
        <h1>
            The Id is {productid};
        </h1>
    )
}


Static Meta Data means manly 


export const metadata={
    title:"ABout Page"
}

export default function About(){
    return(
        <h1>This is the About Page</h1>
    )
}


It follows the Higher Order Only



Routing

Client Side Navigation and Server Side Navigation ,next js gives us the Link Component

--->The <Link> Component is a React Component that Extends the Html '<a>' element ,
and it's the Primary Way to navigate between Routes and Next js


1.Static Routing

import Link from "next/link"
export default function Home(){
  return(
    <>
    <h1>WelCome Home Buddy!</h1>
    <Link href="/blog" className="text-center">Blog</Link>
    <Link href="/products">Products</Link>

    </>
  )
}


2.Dynamic Routing


import Link from "next/link"

export default function ProductList() {
    const productId=100;
    return (
        <>
            <Link href="/">Home</Link>
            <h1>Product Lists</h1>
            <h2>
                <Link href="/products/1">
                    Product1
                </Link>

            </h2>

            <h2>


            <Link href="/products/2">
                Product2
            </Link>

            </h2>

            <h2>


            <Link href="/products/3" replace>
                Product3
            </Link>

            </h2>


            <h2>

                <Link href={`/products/${productId}`}>

                Product {productId}
                
                </Link>
            </h2>
        </>
    )
}




Example-3 which was written in (auth) layout.tsx


"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot-Password", href: "/forgot-password" }
]

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname=usePathname();
    return (

        <div>

            {navlinks.map((item) => {
                const isactive=pathname===item.href || pathname.startsWith(item.href)
                return (
                    <>
                    <Link href={item.href} key={item.name}>
                        {item.name}
                    </Link>
                    <h1>{isactive}</h1>
              
                    </>

            )
            })}
            {children}



        </div>

    );
}




Params and Search Params

Params is a Promise that resolves to an Object containing the dynamic route parameters (like id)

search params is a Promise that resolves to an object containing the query parameters 
(like filters and Sorting)


this example has written in the article Folder

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


Navigatting Programatically

this was written in the order-product

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

with the help of the redirect also we can navigate the Pages



Error.tsx can call automaticllay when ever the error is raised

the whole was written in localhost:3000/products/21/reviews/92

"use client"
export default function ErrorBoundary(){
    return(
        <div>
            Error in ReviewId 
        </div>
    )
}






import { notFound } from "next/navigation";

function getRandomint(count:number){
    return Math.floor(Math.random()*count);
}

export default async function ReviewsPage({params}:{params:Promise<{id:string,reviewid:string}>}){

    const random=getRandomint(2);

    if(random===1){
        throw new Error("Error Loading Review");
    }

    const{id,reviewid}=await params;

    if(parseInt(id)<1000){
        return notFound();
    }

    return(
        <>
        {id} is and review is {reviewid} 
        </>
    )
}


Example-2

"use client"
export default function ErrorBoundary({error}:{error:Error}){
    return(
        <div>
            Error messgae is {error.message}
        </div>
    )
}



here we are showing the Error Message



Example-3


"use client"

import { useRouter } from "next/navigation";
import { startTransition } from "react";

interface Props{
    error:Error,
    reset:()=>void
}
export default function ErrorBoundary({error,reset}:Props){

    const handlereset=()=>{
        reset();
    }

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


Parllel Routes:combined two 0r more components are placed in one place


How we are define

-->Parallel Routes in the Next.js are defined using a feature Known as Slots

-->Slots help organize content in a Modular Way

-->To Create a Slot ,we use the @folder naming Convention


see my folder complex-dashboard 

like Modern Apps it will work 

we can manage easily everything

