
import { ProductCard } from "@/components/productCard";
import { client } from "../../../../sanity/lib/client";
import {use} from "react"
import {  auth } from '@clerk/nextjs'

const getProductData=async (data:string) => {
    const res= await client.fetch(`*[_type=='product' &&_id=='${data}']{p_name,p_img,p_price,p_category,_id}`);
    return res;
}

export default function Product({params}:{params:{id:string}}){
    const {userId}=auth();

    const data =use(getProductData(params.id));
    return(
        <>
        {data.map((e:any)=>{
            return(<ProductCard item={e} userId={userId as string}/>)
        })}
        
        </>
    )

 
}