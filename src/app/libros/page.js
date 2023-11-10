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

export default async function LibrosPage() {
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
            <div className='row rows-cols-1 row-cols-md-3 g-2'>
            <h2 className="bg-blue-500 text-black text-center"><strong>{item.title}</strong></h2>
            <h2>{item.id}</h2>
            <hr/>
            <div className='container my-2 mt-4 px-5 card row g-3'>
            
            <div className='col-6'>
            <Image src={item.thumbnailUrl} width={50} height={50} alt="Img" priority={true} style={imageStyle} className="card mx-5"/>
            </div>
            <div className='col-6'>
            <div className="card-body">
            <h2><strong>Authors:</strong> </h2>
            <p>{item.authors} </p>
            <h2><strong>Categories:</strong> </h2>
            <p>{item.categories} </p>
            <h2><strong>Pages:</strong></h2>
            <p>{item.pageCount} </p>
            <h2><strong>Fecha_Publicacion:</strong></h2>
            <p>{item.publishedDate.$date}</p>
            <h2><strong>Description:</strong> </h2>
            <p>{item.shortDescription}</p>
            </div>
            </div>
            </div>
            </div>
            </article>
            </Link>
            </>
      })}
    </>
  
}
export const runtime = 'edge' //node.js
export const preferredRegion = 'auto'

/**
 * 
 *<div classname="card" style="width: 18rem;">
        <Image  src="..." width={50} height={50} alt="Card image cap"/>
        <div classname="card-body">
         <h5 classname="card-title">Card title</h5>
        <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <a href="#" classname="btn btn-primary">Go somewhere</a>
        </div>
         </div>
 
 */