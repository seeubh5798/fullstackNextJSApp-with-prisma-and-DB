import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function GET(req : NextRequest){
    // console.log(req)
    return Response.json({ name : "shubham" , password : "test"});
}

export async function POST(req : NextRequest){
    const {data} = await req.json();
    
    // console.log("from post request")
   const res = await prisma.user.create({
        data : {
            username : data.username,
            password : data.password
        }
    })
    console.log(res);
    return Response.json({
        message : "logged  in successfully",
        res : {...res}
    })
}