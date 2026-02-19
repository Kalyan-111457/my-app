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