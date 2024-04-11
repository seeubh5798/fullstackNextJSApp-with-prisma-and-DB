"use server"
import prisma from "@/db";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();


export async function signUpUser(username: string, password: string){
    // const {data} = await req.json();
    
    // console.log("from post request")
   try{
    const res = await prisma.user.create({
        data : {
            username : username,
            password : password
        }
    })
    console.log(res);
    // return true
}
catch(err){
    return err;
}

}