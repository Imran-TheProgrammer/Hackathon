import {FiShoppingCart} from "react-icons/fi"
import Image from "next/image"

export default function Hero(){
return(
    <div className="h-screen justify-between mx-auto w-full md:items-center md:flex flex-row ">
        <div className="h-screen w-full lg:w-1/2 flex flex-col font-sans text-black">
            <div className="bg-[#e1edff] text-[#0000ff] w-fit py-[6px] rounded-md px-4 font-semibold text-sm mt-16">Sale 70%</div>
            <div className="text-[#212121] text-6xl font-bold py-12 w-4/5">An Industrial Take on Streetwear</div>
            <div className="text-base text-[#666666] md:w-[55%] w-full">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</div>
            <div className="md:w-1/2 pt-10 w-full">
                <button className="flex flex-row items-center bg-black text-white hover:cursor-pointer p-4 font-semibold">
                  <div className="mr-3"><FiShoppingCart/></div>
                  <div>Start Shopping</div>
                </button>
            </div>
            <div className="flex h-full pt-14 items-end">
                <ul className="flex flex-row gap-x-6">
                    <li><Image src="/img/featured1.png" width={100} height={35} alt="featured" /></li>
                    <li><Image src="/img/featured2.png" width={100} height={35} alt="featured" /></li>
                    <li><Image src="/img/featured3.png" width={100} height={35} alt="featured" /></li>
                    <li><Image src="/img/featured4.png" width={100} height={35} alt="featured" /></li>
                </ul>
            </div>
        </div>
        <div className="hidden lg:block lg:w-1/2  h-screen whitespace-nowrap">
        <div className="flex flex-row h-screen items-center">
        <div className="w-[600px] h-[600px] rounded-full bg-[#ffece3] "></div>
        <div className="absolute h-full w-full">
            <Image src="/img/girl.png" width={675} height={675} alt="girl Image"/>
        </div>
        </div>
        </div>
    </div>
)
}