import Image from "next/image"

export default function Promotions(){
    return(
        <div className="w-full lg:h-screen max-h-max  flex flex-col font-sans text-base justify-center text-[#212121] ">
            <div className=" w-full text-[#00f] tracking-widest text-xs font-semibold flex justify-center">PROMOTIONS</div>
            <div className="w-full tracking-wide text-[26px] lg:text-[32px] font-extrabold py-6 flex justify-center pb-14">Our Promotions Events</div>
            <div className="w-full h-full flex lg:flex-row flex-col gap-4" >
                <div className="lg:w-1/2 w-full h-full flex flex-col gap-4">

                    <div className=" h-full w-full bg-[#d6d6d8] flex flex-row ">


                        <div className=" w-full p-8 flex flex-col justify-center">
                        <div className="text-3xl font-bold ">GET UP TO 60%</div>
                        <div className="text-lg ">For the summer season</div>
                        </div>

                        <div className="w-full flex items-end">
                        
                        <Image
                        src="/img/brownhairgirl1.png"
                        alt="profile"
                        width={0}
                        height={0}
                        style={{width:'70%'}}
                        sizes="100vh"
        />
                        
        
       
      </div>
                    </div>

                    <div className="h-full w-full bg-[#212121] p-8 flex flex-col justify-center text-white">
                        <div className="flex py-3 w-full justify-center font-bold text-3xl">GET 30% Off</div>
                        <div className="flex w-full justify-center font-normal text-base">USE PROMO CODE</div>
                        <div className="flex w-full justify-center py-1 ">
                            <button className="w-9/12 p-2 rounded-xl bg-[#474747] tracking-[4px]">DINEWEEKEND SALE</button>
                        </div>

                    </div>
                </div>
                <div className="lg:w-1/2 w-full h-full flex md:flex-row flex-col gap-4">
                    <div className="h-auto bg-[#efe1c7] w-full flex flex-col ">
                        <div className="p-3">Flex Sweatshirt<br/><span className="text-base"><span className="line-through">$100.00</span>&nbsp;&nbsp;&nbsp;<b>$75.00</b></span></div>
                        <div className="h-full w-full relative">
                        <div className="w-full h-full  flex items-end">
                        <Image
                        src="/img/event2.png"
                        alt="profile"
                        width={0}
                        height={0}
                        style={{width:'100%'}}
                        sizes="100vh"
        />
          </div>
          </div>
          </div>

                    
                    <div className="h-full bg-[#d7d7d9] w-full flex flex-col">
                    <div className="p-3">Flex Push Button Bomber<br/><span className="text-base"><span className="line-through">$225.00</span>&nbsp;&nbsp;&nbsp;<b>$190.00</b></span></div>
                        <div className="w-full h-full  flex items-end">
                        <Image
          src="/img/event3.png"
          alt="profile"
          width={0}
          height={0}
          style={{width:'100%'}}
         sizes="100vh"
        />
       
      </div>
 
       </div>
                    </div>
                </div>
                
            </div>

    )
}