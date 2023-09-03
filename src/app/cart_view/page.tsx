'use client'
import React from 'react';
import { BiShoppingBag } from "react-icons/bi";
import { useAppSelector } from '@/store/store';
import CartItemCard from '@/components/CartItemCard';
import CheckoutProduct from '@/components/CheckoutProduct';


const cart_view = () =>  {
      const cartItems = useAppSelector((state) => state.cart.items);
      const totalItems = useAppSelector((state) => state.cart.totalQuantity);
      const totalPrice = useAppSelector((state) => state.cart.totalAmount);

    if (cartItems.length > 0) {
      return (
          <div className="w-full h-full py-10">
            <div className="flex flex-col w-full">
                  <div className="text-[24px] font-bold text-black">Shopping Cart</div>
                  
                  <div className="flex md:flex-row flex-col justify-between mt-10" >
                    <div className="flex flex-col w-full items-start">
                      {cartItems.map((e:any) => (
                        <CartItemCard key={e._id} cartItem={e} />
                      ))}
                    </div>
                      
                    <div className="flex flex-row bg-slate-100 md:w-[320px] w-full  h-[250px] p-7">

                      <div className="flex flex-col w-full justify-between">
                        <div className="flex font-sans text-[19px] font-bold text-[#212121] leading-[19px] tracking-[1.3px]">Order Summery</div>
                        <div className="flex w-full font-sans text-[16px] font-normal text-[#212121] justify-between"><span>Quanity</span><span className="self-end">{totalItems}Product</span></div>
                        <div className="flex font-sans text-[16px] font-normal text-[#212121] justify-between"><span>Sub Total</span><span>${totalPrice}</span></div>
                        
                        <div className="flex flex-row align-middle w-full">
                          <CheckoutProduct products={cartItems} /> 
                        </div>

                      </div>

                    </div>
                          
                  </div>
                  


            </div>
        </div> 
      );
    } else {
      return (
        <section className="flex h-full px-0 md:px-44 py-14 bg-white">
            <div className="flex flex-col w-full">
                  <div className="text-[24px] font-bold text-black">Shopping Cart</div>
                  
                  <div className="flex justify-between mt-10" >
                    <div className="flex flex-col w-full gap-10 h-full justify-center items-center">
                         <BiShoppingBag size={200} />
                      <h1>Your shopping bag is empty</h1>
                    </div>
                  </div>
                  


            </div>
        </section>
      );
    }
  };
export default cart_view; 


