"use client"
  import Image from "next/image"
  import { Input } from "@/components/ui/input"
  import {FiMenu,FiShoppingCart,FiX} from "react-icons/fi"
import { Button } from "../ui/button"
import Link from "next/link"
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { useSelector } from 'react-redux';

import { RootState } from '@/store/store'
import { UserButton } from "@clerk/nextjs";
import { fetchData } from "@/store/slice/counterSlice";
  export default function Navbar({ userId }: { userId: string }){
    
    const [state, setState]= useState(false);
    const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData(userId)); // Dispatch the fetchData action with the user id
  }, [dispatch, userId]);
    const totalItems = useSelector((state:any) => state.cart.totalQuantity);


    return(
      <main className="justify-between  mx-auto w-full md:items-center md:flex">

        <div className="  flex justify-between  md:w-auto w-full pt-4 md:pt-0 bg-white">
        <span className=" md:pl-0 w-36" >
        <Link href=".">
          <Image src="/img/logo.png" width={140} height={24} alt="logo" className="hover:scale-105 hover:cursor-pointer" />
          </Link></span>

        <span className="md:hidden block right-0 text-2xl pr-2 hover:cursor-pointer hover:scale-105">
           <button  
           onClick={()=>setState(!state)}>

             {state ? <FiX/>:<FiMenu/>}
            </button>
          </span>
        </div>
        
        <ul  className={`md:static absolute md:pl-16 md:flex md:gap-11 top-14 py-5  md:items-center font-sans w-full bg-white ${
                state ? 'block' : 'hidden'
              }`}>
          <li className="md:py-0 py-2 order-2 hover:text-secondary hover:cursor-pointer">
          <Link href="./female">Female</Link></li>
          <li className="md:py-0 py-2 order-3 hover:text-secondary hover:cursor-pointer">
          <Link href="./male">Male</Link></li>
          <li className="md:py-0 py-2 order-4 hover:text-secondary hover:cursor-pointer">
          <Link href="./kids">Kids</Link></li>
          <li className="md:py-0 py-2 order-5 hover:text-secondary hover:cursor-pointer whitespace-nowrap">
            <Link href="./products">All Products</Link></li>
          <li className="md:py-0 py-2 md:opacity-100 opacity-100  hidden lg:block order-6">
          <Input  className="h-8 w-96" placeholder="What item you are looking for?"  />
          </li>
           <li className="md:py-0 py-2 top-[-400px]  md:order-8 flex "><UserButton  afterSignOutUrl="/"/></li>
          <li className="md:py-0 py-2 top-[-400px] md:order-9 flex ">
          
          <Link href="/cart_view"><Button  variant={"secondary"}
    ><FiShoppingCart/></Button></Link>
    <span className="absolute rounded-full bg-red-600 w-4 h-4 top right p-0 ml-[-10px] text-white font-sans text-xs  leading-tight text-center">{totalItems}
</span>
          </li>
        </ul>

        
      </main>





  //     <main className="w-screen flex flex-row">
  //     <div className=" w-full flex flex-row bg-red-950 h-[88px] items-center justify-between md:mx-32 mx-0  ">
  //     <div className="">
  //          <Image src="/img/logo.png" width={140} height={24} alt="logo" /> 
  //     </div>
  //     <div className="md:static absolute w-full flex md:justify-center  bg-red-600 left-0 top-[16%] px-5 py-3"  >
  //         <ul className="flex md:flex-row flex-col gap-5 md:gap-11 text-[15px] justify-between">
  //             <li className="">Female</li>
  //             <li className="">Males</li>
  //             <li className="">Kids</li>
  //             <li className="">All Products</li>
  //             <li className="">SearchBarGoesHere</li>
  //             <li><button className="w-[150px] h-[43px] bg-black text-white  hover:bg-violet-600">Portfolio Here</button></li>
  //         </ul>
  //     </div>
      
      

  // </div>
  // </main>

    )
  }