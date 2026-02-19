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