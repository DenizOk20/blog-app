import prisma from "@/utils/connect";
import { jsx } from "@emotion/react";
import { NextResponse } from "next/server"


//GET SINGLE POST
export const GET = async (req,{params}) => { 

   const {slug} = params
   console.log(post)
    try{
        const post = await prisma.post.update({
            where: {slug},
            include: {user: true}
        }) 
        console.log(post)
        return new NextResponse(JSON.stringify(post,{status:200}))
    }catch(err){
        console.log(err)
        return new NextResponse(JSON.stringify({message: 'Something went wrong'},{status:500}))
    }
}