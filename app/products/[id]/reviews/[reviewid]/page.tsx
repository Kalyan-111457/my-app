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