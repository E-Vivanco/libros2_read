'use client'
import { useEffect } from "react"

export default function Error({error,reset}){
   
    useEffect(()=>{
        console.log("Error es: ",error)
    },[error])

    const retryRequestHandler =()=>{
        reset()
    }

    return <div>
        <h1>Algo no funciona bien en tu pagina!!</h1>
        <br/>
        <button onClick={retryRequestHandler}>Revisar-errores</button>
    </div>
}
//src\app\error.js