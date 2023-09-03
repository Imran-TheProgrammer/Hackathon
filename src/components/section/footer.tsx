import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import {FaFacebookF,FaInstagram,FaLinkedinIn} from "react-icons/fa"


export default function Footer(){
    return(
        <div className="flex flex-col">
          <div className="border-b-[1px] border-black  font-sans text-base text-[#666666] flex flex-col justify-between  mx-auto w-full md:items-start md:flex-row py-44  gap-y-[70px] ">
            <div className=" flex flex-col w-96">
                <div className="w-36">
                <Image src="/img/logo.png" width={140} height={24} alt="logo"/>
                </div>
                <div className="md:py-10 py-5">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</div>
                <div>
                    <ul className="flex gap-2">
                        <li><Button variant={"secondary"} className="bg-[#f1f1f1] text-xl text-black">
                        <FaFacebookF/>
                    </Button></li>
                        <li>
                        <Button variant={"secondary"} className="bg-[#f1f1f1] text-xl text-black">
                        <FaInstagram/>
                    </Button>
                        </li>
                        <li>
                        <Button variant={"secondary"} className="bg-[#f1f1f1] text-xl text-black"><FaLinkedinIn/></Button>
                        </li>

                    </ul>
                    
                    
                    
                </div>
            </div>


            <div>
                <ul className="flex flex-col gap-y-4 whitespace-nowrap ">
                    <li><Link href="#" className="font-bold py-3 text-lg" >Company</Link></li>
                    <li><Link href="#" className="py-3" >About</Link></li>
                    <li><Link href="#" className="py-3" >Term of Use</Link></li>
                    <li><Link href="#" className="py-3" >Privacy Policy</Link></li>
                    <li><Link href="#"  className="py-3">How it Works</Link></li>
                    <li><Link href="#"  className="py-3">Contact Us</Link></li>
                </ul>

            </div>
            

            <div>
                <ul className="flex flex-col gap-y-4 whitespace-nowrap">
                    <li><Link href="#" className="font-bold py-3 text-lg" >Support</Link></li>
                    <li><Link href="#" className="py-3" >Support Carrer</Link></li>
                    <li><Link href="#" className="py-3" >24h Service</Link></li>
                    <li><Link href="#" className="py-3" >Quick Chat</Link></li>
                </ul>
            </div>

            <div>
                <ul className="flex flex-col gap-y-4 whitespace-nowrap">
                    <li><Link href="#" className="font-bold py-3 text-lg" >Contact</Link></li>
                    <li><Link href="#" className="py-3" >Whatsapp</Link></li>
                    <li><Link href="#" className="py-3" >Support 24h</Link></li>
                    
                </ul>
            </div>

        </div>

        <div>
        <ul className=" w-full flex md:flex-row flex-col py-6 gap-y-6">
            <li className="w-full">Copyright © 2022<br/><b>Dine Market</b></li>
            <li className="w-full">Design by.<br/><b>Weird Design Studio</b></li>
            <li className="w-full">Code by.<br/><b>Imran-TheProgrammer</b> on github</li>

        </ul>
        </div>
        </div>
    )
}