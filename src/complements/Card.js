import Image from 'next/image'
import React from 'react'

export default function Card({params}) {
    const {thumbrlUrl}= params
  return (
    <>
        <div classname="card" style="width: 18rem;">
        <Image  src="..." width={50} height={50} alt="Card image cap"/>
        <div classname="card-body">
         <h5 classname="card-title">Card title</h5>
        <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
        <a href="#" classname="btn btn-primary">Go somewhere</a>
        </div>
         </div>

    </>
  )
}
