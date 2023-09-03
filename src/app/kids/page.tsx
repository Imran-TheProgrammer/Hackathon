import ShowProducts from "@/components/section/showProducts";
import { client } from "../../../sanity/lib/client";
import {use} from "react"

const getProductData=async () => {
    const res= await client.fetch(`*[_type=='product' && p_gender=='kids']{p_name,p_img,p_price,p_category,_id}`);
    return res;
}

export default function KidsProduct(){
    const data = use(getProductData());
    return(
        <>
        <ShowProducts params={data}/>
        </>
    )
}