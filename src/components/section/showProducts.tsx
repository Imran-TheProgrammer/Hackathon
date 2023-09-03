import Image from "next/image"

import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";


 

export default function ShowProducts({params}:any){
    return(
        <div className="w-full h-full py-10">
            <div className="grid md:grid-cols-4 sm:grid-cols-2   gap-12 font-sans">
            {params.map((e:any)=>{
                return(
                <Link

                href={`./products/${e._id}`}
                key={e._id}
                >
                <div className="w-full flex flex-col">
                <div>
                <Image
                        src={ urlForImage(e.p_img).url()}
                        alt="profile"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />   </div>
                <div className="text-base font-semibold pt-2">{e.p_name}</div>
                <div className="text-sm font-semibold text-[#888888] py-1">{e.p_category}</div>
                <div className="text-xl font-bold">${e.p_price}</div>
                </div>
                </Link>

)
})}    
             </div>
        </div>
    )}

    