import { Metadata } from "next";

type Props={
    params:Promise<{id:string}>
}


export  async  function generateMetadata({params}:Props):Promise<Metadata>{
    const {id}=await params;

    return(
        {
            title:`the id is ${id}`
        }
    )

}

export default async function gettingId({params}:Props){

    const {id}=await params;

    return(
        <h1>The Id is {id}</h1>
    )

}