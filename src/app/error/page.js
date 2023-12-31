// 'use client'
import getDomain from "../lib/getDomain";

async function getData() {
    //  endpoint - API
    const domain = getDomain()
    const endpoint = `${domain}/api/libros` // -> third party api request??
    const res = await fetch(endpoint) // HTTP GET
    
    {/* if (!res.ok) {
         throw new Error("Failed to fetch data")
     }*/}
    return res.json()
   // return {items: []}
}


export default async function LibrosPage() {
    const data = await getData()
    const items = data && data.items ? [...data.items] : []
    return <main>
        <h1>Hello World</h1>
        <p>Libros:</p>
        {items && items.map((item, idx)=>{
            return <li key={`libros-${idx}`}>{item.title}</li>
        })}
    </main>
}