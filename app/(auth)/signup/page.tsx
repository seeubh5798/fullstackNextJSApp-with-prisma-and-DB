
import  Signup  from "@/components/signup"

export default async function() {
    await new Promise(r => setTimeout(async () => {
     r("test")
    }, 3000))
    return <Signup />
}