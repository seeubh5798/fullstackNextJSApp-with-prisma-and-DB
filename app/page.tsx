import axios from "axios";
import Image from "next/image";

async function dataFetch(){
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('');
    }, 2000);
  })
  // const res = await axios.get("https://worker-solitary-mode-19c1.ska10.workers.dev/");  // for calling 3rdparty API but how to call our own API written in NextJS ? use beloe line

  const res = await axios.get('http://localhost:3000/api/user')
  // console.log(res)
   return res;
}


export default async function Home() {

  const res = await dataFetch();
  // console.log(res);
  return (
    <>
   <div>Hello NextJs </div>
   <div>{ res.data.name } - {res.data.password }</div>
   </>
  );
}
