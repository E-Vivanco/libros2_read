'use server'

import Image from "next/image"
import Link from "next/link"
import Formulario from "@/complements/Formulario";


const imageStyle = {
    borderRadius: '50%',
    border: '1px solid #fff',
  }

async function getData(){
  const endpoint=  "http://localhost:3000/api/libros/"
  const res = await fetch(endpoint)

  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json()
}


export default async function BlogPage() {
    const data = await getData()
    const items = data && data.items ? [...data.items] : []
  //  console.log(items)
  //const dataok = JSON.stringify(data) //1-ableson.jpg
    return <>
      <hr/>
        <div><Formulario params={0}/></div>
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
