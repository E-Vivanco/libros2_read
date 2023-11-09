import {useState} from 'react';

export const useForm=({params})=> {
    const [formulario,setFormulario]= useState({params});

    const handledFormulaio=({target})=>{
       const {name,value} = target
       
       setFormulario({
            ...formulario,
           [name]: value
       })

    }
    return{
        formulario,
        handledFormulaio,
        ...formulario
    }
    
}

