"use client"
import {useState} from "react";
import { RootState } from "@/store/store";
import { useSelector,useDispatch } from "react-redux";
import { FiShoppingCart } from "react-icons/fi"
import React from 'react'
import { Toaster,toast } from "react-hot-toast";
import { cookies } from "next/dist/client/components/headers";
import {auth} from "@clerk/nextjs"
import { cartActions } from "@/store/slice/counterSlice";
import { urlForImage } from "../../sanity/lib/image";

type AddtoCardProps = {
   data: any;
    userId: string;
  };
  


export default function AddToCart(props:AddtoCardProps)  {

 const [isLoading, setIsLoading] = useState(false);
 const dispatch =useDispatch();
const[tempQuantity, settempQuantity]= useState(1);
//const {userId} = auth();

const add=()=>{
    settempQuantity(tempQuantity+1)
}


const subtract=()=>{
    settempQuantity(tempQuantity-1)
}



const getUserProducts = async () => {
    const res = await fetch(`/api/cart/${props.userId}`);
    if (!res.ok) {
      throw new Error("Failed to Fetch Data From API");
    }
    const data = await res.json();
    return data;
  };


  const handleCart = async () => {
    setIsLoading(true);
    try {
      const cartData = await getUserProducts();
      const existingItem = cartData.cartItems.find(
        (item: any) => item._id === props.data._id
      );
      dispatch(cartActions.incrementByAmount(tempQuantity));
      

      //console.log('CARTDATA:'+ TotalCartQuantity);
      if (existingItem) {
        const newQuantity = existingItem.quantity + tempQuantity;
        const newPrice = existingItem.price;
        const res = await fetch("/api/cart",
          {
            method: "PUT",
            body: JSON.stringify({
              product_id: props.data._id,
              quantity: newQuantity,
              price:newPrice,
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Failed to update data");
        }
      } 
      
      else {
        await handleAddToCart();
      }
    } catch (error) {
      console.log((error as { message: string }).message);
    }

    setIsLoading(false);
  };




    // const  productQuantity= useSelector(
    //     (state:RootState)=>state.counterSlice.value
    //     );
    
    //    const dispatch = useDispatch();
    //     const increament = ()=>{
    //        dispatch(counterActions.increment());
    //     }
    
    //     const decreament = ()=>{
    //        dispatch(counterActions.decrement());
    //     }
  
    // const ProductInCart=()=>{
    //     const ProductInCart= 
    // }


    const handleAddToCart= async () => {
        
        const res=  await fetch("/api/cart",{
            method:"POST",
            body: JSON.stringify({
                product_id: props.data._id,
                quantity:tempQuantity,
                product_title: props.data.p_name,
                product_category: props.data.p_category,
                price:props.data.p_price,
                image: urlForImage(props.data.p_img).url(),
            })
            
        });
    
        if (!res.ok) {
            throw new Error("Failed to add Data");
          }
        //return await res.json();
        };



        const AddtoCart = () => {
            toast.promise(handleCart(), {
              loading: "Adding To Cart",
              success: "Product added To Cart",
              error: "Failed to Add Product to cart",
            });
            //dispatch(cartActions.addToCart({ product: props.product, quantity: qty }));
          };
  
    return (
    <div className="flex flex-col">
    <div className="flex flex-row">
          <div className="  font-semibold text-sm ">Quantity:</div>
                        <div className="  font-semibold text-sm ml-7">
                        <div className="flex flex-row">
            <div>
                <button
                onClick={subtract}
                className="text-base font-bold w-7 h-7 rounded-full bg-[#eeeeee]"
                >-</button>
            </div>
            <div 
            className="mx-6 font-bold text-lg"
            >{tempQuantity}</div>
            <div>
                <button
                onClick={add}
                className="text-base font-bold w-7 h-7 rounded-full bg-[#eeeeee]"
                >+</button>
            </div>
        </div>
                        </div>
    </div>
    <div className="flex flex-row w-full gap-x-5 pt-5 ">
                            <div className="w-fit bg-red-500">
                                <button 
                                className="flex flex-row px-5 py-2 bg-[#212121] hover:bg-[#111111] text-white font-bold text-base items-center"
                                onClick={()=>AddtoCart()}
                                >
                                <div className="mr-3"><FiShoppingCart/></div>
                      <div>{isLoading ? "Adding..." : "Add To Cart"}</div>
                                </button>
                            </div>
                            <div className="w-fit text-2xl font-semibold">${props.data.p_price}.00</div>
                            
     </div>
     <Toaster />
    </div>
  )
}
