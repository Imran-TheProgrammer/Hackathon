"use client";
import { useAppDispatch } from "@/store/store";
import { Toaster, toast } from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { cartActions } from "@/store/slice/counterSlice";
import { useState } from "react";
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { FiMinus, FiPlus } from "react-icons/fi";



const CartItemCard = ({ cartItem }: any) => {
  const [qty, setQty] = useState(cartItem.quantity);
  const dispatch = useAppDispatch();

  const handleCart = async (newQty: number) => {
    const newPrice = cartItem.price * newQty;

    try {
      if (newQty) {
        const res = await fetch(
          `/api/cart`,
          {
            method: "PUT",
            body: JSON.stringify({
              product_id: cartItem._id,
              quantity: newQty,
              price: newPrice,
            }),
          }
        );
        if (!res.ok) {
          throw new Error("Failed to update data");
        }
      } else {
        throw new Error("Failed to fetch update");
      }
    } catch (error) {
      console.log((error as { message: string }).message);
    }
  };

  const handleDelete = async () => {
    console.log("Product ID>>>>>>",cartItem._id)
    await fetch(`/api/cart/removeproduct/${cartItem._id}`, {
      method: "DELETE",
    });
  };

  const increaseQuantity = () => {
    toast.promise(handleCart(qty + 1), {
      loading: "Increasing Product Quantity",
      success: "Product Quantity Increased",
      error: "Failed to Increased Quantity",
    });
    setQty(qty + 1);
    dispatch(cartActions.addToCart({ product: cartItem, quantity: 1 }));
  };

  const decreaseQuantity = () => {
    if (cartItem.quantity > 1) {
      toast.promise(handleCart(qty - 1), {
        loading: "Decreasing Quantity",
        success: "Product quantity Decreased",
        error: "Failed to Decrease quantity",
      });
      setQty(qty - 1);
      dispatch(cartActions.removeFromCart(cartItem._id));
    }
  };

  const DeleteProduct = () => {
    toast.promise(handleDelete(), {
      loading: "Removing Product",
      success: "Product Removed",
      error: "Failed to Remove Product",
    });
    dispatch(cartActions.removeProduct(cartItem._id));
  };
  return (
    
    <section className="flex h-full w-full px-0 md:pr-28 pb-[25px] items-start">
        <div className="flex w-full">
        <div className="flex flex-col w-full gap-y-4">
            <div  className="flex flex-col w-full h-auto rounded-xl border-[1px] border-[#d1d1d1]" >

            <div className="flex flex-row gap-x-7">
                <div className="flex w-[28%]">
                    <Image
                          // @ts-ignore
                          src={cartItem.image}
                          alt={cartItem.title}
                          width={0}
                          height={0}
                          className="rounded-l-xl"
                          style={{width:'100%'}}
                          sizes="100vh"
                    />
                </div>

                <div className="flex flex-row w-[72%] h-auto py-3">
                <div className="flex flex-col w-full gap-y-4">
                    <div className="flex font-sans text-[21px] font-light text-[#212121] leading-[22px] tracking-[1px] justify-between">{cartItem.title}</div>
                    <div className="flex font-sans text-[16px] font-semibold text-[#888888]">{cartItem.category}</div>
                    <div className="flex font-sans text-[16px] font-semibold text-[#212121]">Delivery Estimation</div>
                    <div className="flex font-sans text-[16px] font-semibold text-[#FFC700]">5 Working Days</div>
                    <div className="flex font-sans text-[17.6px] leading-[18px] font-bold text-[#212121] tracking-widest">${cartItem.price * cartItem.quantity}.00</div>
                </div>
                <div className="flex w-[30%] h-[190px] flex-col justify-between items-center">
                    <button onClick={DeleteProduct}>
                        <BsTrash size={25} className="cursor-pointer" />
                    </button>
                    <div className="flex flex-row align-middle">
                    <button onClick={decreaseQuantity} className="flex h-[23px] w-[23px] border-[#212121] border-solid border-[1px] font-semibold place-items-center justify-center bg-[#F2F3F7] text-[#212121] rounded-full"><span><FiMinus size={14}/></span></button>
                    <div className="flex w-[30px] pb-5 font-sans text-[13px] justify-center leading-[23px] font-normal text-[#212121] tracking-widest px-[10px]">{qty}</div>
                    <button onClick={increaseQuantity} className="flex h-[23px] w-[23px] border-[#212121] border-solid border-[1px] font-semibold place-items-center justify-center bg-[#F2F3F7] text-[#212121] rounded-full"><span><FiPlus size={14}/></span></button>
                    </div>
                </div>

                </div>
            </div>

            </div>


        </div>
              <Toaster position="top-center"/>
        </div>
    </section>
  )
};

export default CartItemCard;