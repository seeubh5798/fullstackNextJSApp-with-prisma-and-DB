import NextAuth from "next-auth/next";
import  CredentialsProvider  from "next-auth/providers/credentials";
const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: 'credentials',
            credentials : {
                username : { type :'username' , label : 'text' , placeholder: 'Enter your username'},
                pasword  :{ type :'password' , label : 'password' , placeholder : 'Enter your password'}
            },
            async authorize(credentials :any){
                return {
                    userId : "user1",
                };
            }
        })
    ]
});





export {  handler as GET, handler as POST};