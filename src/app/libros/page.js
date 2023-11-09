//'use server'
import Image from "next/image"
//import ProfileImage from "../../components/ProfileImage"
import Link from "next/link"
import Formulario from "@/complements/Formulario"
import getDomain from "../lib/getDomain";
//import helloWorld  from "@/app/lib/db";

const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }
async function getData(){
  const domain = getDomain()
  const endpoint=  `${domain}/api/libros/`
  const res = await fetch(endpoint)
  {/*,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
        }
     })*/}

  {/*if(!res.ok){
    throw new Error("Failed to fetch data")
  }*/}
return res.json()
//return {items: []}
}

export default async function BlogPage() {
    const data = await getData()
  //  const dbHello = await helloWorld()
    const items = data && data.items ? [...data.items] : []
   // console.log(dbHello)
  //  console.log(items)
  //const dataok = JSON.stringify(data) //1-ableson.jpg
    return <>
      <hr/>
        <div><Formulario params={0}/></div>
       {/*<p>DB Response: {JSON.stringify(dbHello)}</p>*/}
      {items && items.map((item,id)=>{
          return <><Link href={`/libros/[id]`} as={`/libros/${item.id}`}><article key={`libro-${id}`} className="card my-5">
            <h2 className="bg-blue-500 text-black text-center"><strong>{item.title}</strong></h2>
            <h2>{item.id}</h2>
            <Image src={item.thumbnailUrl} width={50} height={50} alt="Img" priority={true} style={imageStyle} className="card mx-5"/>
            <p>{item.shortDescription}</p>
            </article>
            </Link>
            <hr/>
            </>
      })}
    </>
  
}
