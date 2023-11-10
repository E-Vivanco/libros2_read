'use client'
import {useState} from 'react'
import { useForm } from '../hooks/useForm';
import Link from 'next/link';

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
if(!activo) {return <button onClick={(e)=>handledChange(1)}> BUSCAR </button>}
return(
    <>
    <div className='conteiner-fluid'>
    <form className='w-50' autoComplete='off'>
      <div className='mb-3'>
        <label className='form-label mx-3 my-1'> TITULO </label>
        <input type='text'
                className='form-control text-black'
                name='title'
                onChange={handledFormulaio }
        />

        <label className='form-label mx-3 my-1'> AUTOR </label>
        <input type='text'
                className='form-control text-black'
                name='author'
                onChange={handledFormulaio}
        />

        <label className='form-label mx-3 my-1'> CATEGORIA </label>
        <input type='text'
                className='form-control text-black'
                name='categories'
                onChange={handledFormulaio}
        />
      </div>
      <div className='bg-blue-400 text-center'><button type="submit">BUSCAR</button></div>
    </form>
    {/*formulario && JSON.stringify(formulario)*/}
    </div>
    </>
  )
  //{return <div>Empty</div>}
}

