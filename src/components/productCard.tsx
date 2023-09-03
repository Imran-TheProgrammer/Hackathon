"use client"
import Image from "next/image"
import { urlForImage } from "../../sanity/lib/image"
import {FC} from "react"
import { useSelector } from "react-redux/es/exports"
import { RootState } from "@/store/store"
import AddToCart from "./AddToCart"
import {  auth } from '@clerk/nextjs'

type ProductCardProps = {
  item: any;
  userId: string;
};

export const ProductCard: FC<ProductCardProps> = ({ item, userId })=>{
  //const {userId} = auth();
       return(
        <div className="flex flex-col h-full w-full ">
            
            <div className="flex flex-col lg:flex-row w-full h-full gap-11 py-16">
                <div className="lg:w-1/2 w-full bg-slate-400  " >
                <div className=" h-full flex items-center">
                <Image
                
                            src={urlForImage(item.p_img).url()}
                            alt="profile"
                            width={0}
                            height={0}
                            style={{width:'100%'}}
                            sizes="100vh"
            />
                </div>
                </div>
                <div className="lg:w-1/2 w-full flex  p-8  text-[#212121]" >
                    <div className="flex flex-col pt-10">
                        <div className="tracking-widest font-medium text-2xl">{item.p_name}</div>
                        <div className=" text-[#aaaaaa] font-semibold text-xl">{item.p_category}</div>
                        <div className="flex flex-col py-8">
                        <div className="  font-semibold text-sm uppercase">Select Size</div>
                       <div className="w-full flex flex-row gap-x-10 py-2">
                       <div className="w-1/5">
                       <button
        className="  focus:text-[#212121] text-[#aaaaaa] rounded-full " style={{width:'100%', height:'165%'}}>
        <input
          className="hidden relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="radio"
          name="inlineRadioOptions"
          value="xs" />
        <label
          className="hover:cursor-pointer font-semibold "
          htmlFor="inlineRadio1"
          >XS</label>
        </button>
                       </div>
    
    
    
                       <div className="w-1/5">
                       <button
        className="  focus:text-[#212121] text-[#aaaaaa] rounded-full " style={{width:'100%', height:'165%'}}>
        <input
          className="hidden relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="radio"
          name="inlineRadioOptions"
          value="s" />
        <label
          className="hover:cursor-pointer font-semibold "
          htmlFor="inlineRadio1"
          >S</label>
        </button>
                       </div>
    
    
    
    
                       <div className="w-1/5">
                       <button
        className="  focus:text-[#212121] text-[#aaaaaa] rounded-full " style={{width:'100%', height:'165%'}}>
        <input
          className="hidden relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="radio"
          name="inlineRadioOptions"
          value="m" />
        <label
          className="hover:cursor-pointer font-semibold "
          htmlFor="inlineRadio1"
          >M</label>
        </button>
                       </div>
    
    
    
    
    
                       <div className="w-1/5">
                       <button
        className="  focus:text-[#212121] text-[#aaaaaa] rounded-full " style={{width:'100%', height:'165%'}}>
        <input
          className="hidden relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="radio"
          name="inlineRadioOptions"
          value="l" />
        <label
          className="hover:cursor-pointer font-semibold "
          htmlFor="inlineRadio1"
          >L</label>
        </button>
                       </div>
    
    
    
    
    
                       <div className="w-1/5">
                       <button
        className="  focus:text-[#212121] text-[#aaaaaa] rounded-full " style={{width:'100%', height:'165%'}}>
        <input
          className="hidden relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid border-neutral-300 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
          type="radio"
          name="inlineRadioOptions"
          value="xl" />
        <label
          className="hover:cursor-pointer font-semibold "
          htmlFor="inlineRadio1"
          >XL</label>
        </button>
                       </div>
    
    
                       </div>
                        </div>
                        <div className="flex flex-row">
                        <AddToCart data={item} userId={userId}/>
                        </div>
    
                    </div>
                </div>
            </div>
    
            <div className="h-full w-full py-10 flex flex-col text-[#212121]">
                <div className="w-full flex flex-row items-center py-14 border-b-[1px]">
                    <div className="font-semibold text-base tracking-wider z-20">Product Information</div>
                    <div className="absolute font-extrabold text-[120px]  opacity-5 z-10">Overview</div>
                    
                </div>
    
                <div className="py-10 w-full flex md:flex-row flex-col  text-base ">
                    <div className="md:w-1/4 w-full  font-semibold">PRODUCT DETAILS</div>
                    <div className="md:w-3/4 w-full md:pt-0 pt-3 text-sm text-[#888888] tracking-wider">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    
                </div>
    
            </div>
    
            </div>
    )
}