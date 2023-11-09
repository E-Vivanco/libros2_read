'use client'
import { useState } from 'react';

export function LikeBook(id){
    const [liked, setLiked]= useState(false)
    return(
        <button className='bg-blue-300' onClick={()=>setLiked(!liked)}> 
        {liked ? '❤️': '🤍'}
        </button>
    )
}