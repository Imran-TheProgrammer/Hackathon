
import { db,cartTable } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";
import {v4 as uuid} from "uuid"
import { cookies } from "next/dist/client/components/headers";
import { addToCart } from "@/lib/drizzle";
import { and, eq } from "drizzle-orm";
import {auth} from '@clerk/nextjs'
// export async function GET(request: NextRequest){

// }


export async function POST(request: NextRequest) {
  const req = await request.json();
  const {userId} = auth();
  if(!userId)
  {
    return NextResponse.json("UserId not found in POST query");
  }


try{
    const res = await db.insert(cartTable).values(
        {
            product_id: req.product_id,
            quantity:req.quantity,
            user_id:userId,
            product_title: req.product_title,
            product_category: req.product_category,
            price: req.price,
            image: req.image,
            total_price:req.price*req.quantity,

        }
    ).returning();

    return NextResponse.json({res})
}

catch(error)
{

    console.log(error);
    return new NextResponse(
        JSON.stringify({
          message: "There went some problem with POST api"
        })
      );
}
 
}




export async function PUT(request: NextRequest){
  
  const req = await request.json();
  const {userId} = auth();
  try {
    if (req) {
      const res = await db
        .update(cartTable)
        .set({
          quantity: req.quantity,
          product_id: req.product_id,
          total_price: req.price*req.quantity,
        })
        .where(and(eq(cartTable.user_id, userId as string), eq(cartTable.product_id, req.product_id))).returning();
      return NextResponse.json({ req });
    } else {
      throw new Error("Failed to update Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Message: "Something went wrong",
    });
  }
};