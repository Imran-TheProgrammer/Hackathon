"use client";
import getStipePromise from "@/lib/stripe";



const CheckoutProduct = (props: any) => {
 console.log("Props DATA>>>>>",props.products)
  const handleCheckout = async () => {
    const stripe = await getStipePromise();
    //console.log("Stripe>>>",stripe)
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(props.products),
    });

    const data = await response.json();
    //console.log("Stripe Data>>>>>",data)
    if (data.session) {
      stripe?.redirectToCheckout({ sessionId: data.session.id });
    }
  };

  return (
    <div className="py-5 w-full">
      <button onClick={handleCheckout} className="flex h-[40px] w-full border-[#888888] border-solid border-2 font-semibold place-items-center justify-center bg-[#212121] text-white"><span className="flex text-center text-[14px] leading-[16px]">Process to Checkout</span></button>
    </div>
  );
};

export default CheckoutProduct;