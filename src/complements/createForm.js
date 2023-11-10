'use client'
import React,{useState} from 'react'

export default function FormCreate() {
  const [results,setResults]=useState(null)

  const handledForm = async(e)=>{
    e.preventDefault()

    const formData = new FormData(e.target)
    const data = Object.fromEntries(formData)
    console.log("soy data",data)
    const JSONData = JSON.stringify(data)
    console.log("soy jsondata",JSONData)
    const endpoint= `/api/links/`

      const options ={
        method: "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSONData
      }
      const response = await fetch(endpoint,options)
      const result = await response.json()
      console.log("me agrego al usestate",result)
      setResults(result)
    
  }
  return <>
    <form onSubmit={handledForm}>
        <label>Nombre
        <br/>
        <input type="text" 
        defaultValue="Read-Connect"
        name="Name" 
        placeholder='Ingresa tu nombre'
        className='text-black'
        /></label>
        
        <br/>
        <label>Email
        <br/>
        <input type="email" 
        defaultValue="email@ss.cl"
        name="Email" 
        placeholder='Ingresa tu email'
        className='text-black'
        /></label>
        
        <br/>
        <label>Pass
        <br/>
        <input type="pass" 
        defaultValue="11111"
        name="Pass" 
        placeholder='Ingresa tu pass'
        className='text-black'
        /></label>
        
        <br/>
        <br/>
        <button type="submit">Enviar</button>

    </form>
    {results && JSON.stringify(results)}
    </>
}
