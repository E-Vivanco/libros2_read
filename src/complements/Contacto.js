'use client'
import {useState} from 'react'
import { useForm } from '../hooks/useForm';
//import Link from 'next/link';

export default function Formulario ({params=0}){
    const {formulario,handledFormulaio}= useForm({
        titulo:'Hibernate Search in Action',
        author:'Bernard',
        categories:'Java',
    })
    const [activo,setActivo]= useState(0)
    const handledChange=(e)=>{
        setActivo(1)
    }
if(!activo) {return <button onClick={(e)=>handledChange(1)}> CONTACTO </button>}
return(
    <>
    <div className='conteiner-fluid'>
    <form className='w-50' autoComplete='off'>
      <div className='mb-3 text-center'>
        <label for="nombre" className='form-label mx-3 my-1'> NOMBRE
        <br/>
        <input type='text'
                className='form-control text-black my-3 mb-3'
                name='nombre'
                id='nombre'
                placeholder='Ingresa tu nombre'
                onChange={handledFormulaio }
        /></label>
        <br/>
        <br/>
        <label for="email" className='form-label mx-3 my-3'> EMAIL 
        <br/>
        <input type='email'
                className='form-control text-black my-3 mb-3'
                name='email'
                id='email'
                placeholder='email@ss.cl'
                onChange={handledFormulaio}
        /></label>
        <br/>
        <br/>
        <label for="mensaje" className='form-label mx-3 my-3'> MENSAJE
        <br/>
        <textarea  type='textarea'
                className='form-control text-black my-3 mb-3'
                name='mensaje'
                id='mensaje'
                placeholder='Ingresa mensaje'
                onChange={handledFormulaio} >
        </textarea></label> 
      </div>
      <div className='text-center w-50'><button type="submit">ENVIAR</button></div>
    </form>
    
    </div>
    </>
  )
  //{return <div>Empty</div>}
}

