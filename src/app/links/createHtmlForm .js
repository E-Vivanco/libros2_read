'use client'
import React,{useState} from 'react'

export default function FormHtmlCreate() {
  
  return <>
    <form action='/api/links/' method='POST'>
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

    </>
}
