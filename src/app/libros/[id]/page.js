//'use server'
import Image from "next/image"
import Link from "next/link"
import LikeBook  from "@/complements/LikeBook"
import getDomain from "@/app/lib/getDomain";
//const i=0
//let libros_ok=[]

  async function fetchIdTexto(id){
   {/* const domain = getDomain()
    const endpoint2 =`${domain}/api/libros/${id}`
  
    const res2= await fetch(endpoint2,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
        }
     })
    if(!res2.ok){
        throw new Error("Failed to fetch data")
      }
    return res2.json()
    */}   
     return {items: []}
  }
  export default async function Libro({params}){
    const {id} = params
   // console.log("soy id desde func libros",id)
    const libro = await fetchIdTexto(id)
    //console.log("SOY LIBRO",libro['items'])
   // console.log("soy id",libro['items'][id -1].id)
  
    return( <article className="card my-5 mx-5 bg-blue-300 text-black text-justify min-h-screen px-10" >
      <p className="bg-blue-500 text-center text-black"><strong>{libro['items'][id -1].title}</strong></p>
      <br/>
      <div className="card mx-5 px-1 text-justify" >
      <Image src={libro['items'][id -1].thumbnailUrl} width={50} height={50} alt="img" priority={true} />  
      <div className="text-right">
      <Link href={'`${domain}`/libros'} className="bg-red-400"><strong>Libros</strong></Link>
      </div>
      <hr/>
      <div className="text-center">  
      <h1>{libro['items'][id -1].id}</h1>
      </div>
      <div  className="card mx-5 px-2 text-center"> 
      <LikeBook />
      </div>
      <p>{libro['items'][id -1].longDescription}</p>
      </div>
     
      </article>
    )
  }
  
 