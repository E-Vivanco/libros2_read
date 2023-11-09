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
      <div className='mb-3'>
        <label className='form-label mx-3 my-1'> NOMBRE</label>
        <input type='text'
                className='form-control text-black'
                name='title'
                onChange={handledFormulaio }
        />

        <label className='form-label mx-3 my-1'> EMAIL </label>
        <input type='text'
                className='form-control text-black'
                name='author'
                onChange={handledFormulaio}
        />

        <label className='form-label mx-3 my-1'> MENSAJE </label>
        <textarea  type='text'
                className='form-control text-black'
                name='categories'
                onChange={handledFormulaio}
        >
        </textarea>
      </div>
      <div className='bg-red-400 text-center'><button type="submit">ENVIAR</button></div>
    </form>
    
    </div>
    </>
  )
  //{return <div>Empty</div>}
}

