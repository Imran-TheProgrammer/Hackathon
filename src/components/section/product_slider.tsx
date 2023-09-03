"use client"
import Image from "next/image"
import { use } from "react";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";

const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];

const getProductData=async () => {
    const res= await client.fetch(`*[_type=='product']{p_name,p_img,p_price}`);
    return res;
}

export default  function ProductSlider(){
    
    const data = use(getProductData());

    return(
        <div className="w-full lg:h-screen max-h-max  flex flex-col font-sans text-base justify-center text-[#212121] ">
            <div className=" w-full text-[#00f] tracking-widest text-xs font-semibold flex justify-center">PRODUCTS</div>
            <div className="w-full tracking-wide text-[26px] lg:text-[32px] font-extrabold py-6 flex justify-center pb-14">Check What We Have</div>
           
            <div className="w-full " >

            <Slide  slidesToScroll={1} slidesToShow={1}  autoplay={false} arrows={true} responsive={[{
  breakpoint: 800,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 2
  }
}, {
  breakpoint: 500,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
}]}>

{data.map((e:any)=>{
return(
    <div
        key={e._id} 
      className=" transition ease-in delay-1800 md:hover:scale-110 flex flex-col" >
            <div>
            <Image
                        src={urlForImage(e.p_img).url()}
                        alt="slider1"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />
            </div>
            <div className="font-sans text-[#212121] text-xl font-semibold py-5 pl-4">
                {e.p_name}<br/>${e.p_price}
            </div>

        </div>

)
})}

{/* 
        <div  className="transition ease-in delay-1800 md:hover:scale-110 flex flex-col" >
            <div>
            <Image
                        src="/img/slider2.png"
                        alt="slider2"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />
            </div>
            <div className="font-sans text-[#212121] text-xl font-semibold py-5 pl-4">Brushed Raglan Sweatshirt<br/>$195</div>
        </div>




        <div  className="transition ease-in delay-1800 md:hover:scale-110 flex flex-col" >
            <div>
            <Image
                        src="/img/slider3.png"
                        alt="slider3"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />
            </div>
            <div className="font-sans text-[#212121] text-xl font-semibold py-5 pl-4">Brushed Raglan Sweatshirt<br/>$195</div>
        </div>



        <div  className="transition ease-in delay-1800 md:hover:scale-110 flex flex-col" >
            <div>
            <Image
                        src="/img/slider4.png"
                        alt="slider4"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />
            </div>
            <div className="font-sans text-[#212121] text-xl font-semibold py-5 pl-4">Brushed Raglan Sweatshirt<br/>$195</div>
        </div>




        <div  className="transition ease-in delay-1800 md:hover:scale-110 flex flex-col" >
            <div>
            <Image
                        src="/img/slider5.png"
                        alt="slider5"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />
            </div>
            <div className="font-sans text-[#212121] text-xl font-semibold py-5 pl-4">Brushed Raglan Sweatshirt<br/>$195</div>
        </div>



        <div  className="transition ease-in delay-1800 md:hover:scale-110 flex flex-col" >
            <div>
            <Image
                        src="/img/slider6.png"
                        alt="slider6"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />
            </div>
            <div className="font-sans text-[#212121] text-xl font-semibold py-5 pl-4">Brushed Raglan Sweatshirt<br/>$195</div>
        </div>



        <div  className="transition ease-in delay-1800 md:hover:scale-110 flex flex-col" >
            <div>
            <Image
                        src="/img/slider7.png"
                        alt="slider7"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />
            </div>
            <div className="font-sans text-[#212121] text-xl font-semibold py-5 pl-4">Brushed Raglan Sweatshirt<br/>$195</div>
        </div>



        <div  className="transition ease-in delay-1800 md:hover:scale-110 flex flex-col" >
            <div>
            <Image
                        src="/img/slider8.png"
                        alt="slider8"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />
            </div>
            <div className="font-sans text-[#212121] text-xl font-semibold py-5 pl-4">Brushed Raglan Sweatshirt<br/>$195</div>
        </div> */}




 </Slide>          
            </div>

        </div>

    )
}