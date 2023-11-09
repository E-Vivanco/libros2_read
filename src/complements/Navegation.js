'use client'
import Link from 'next/link'
import styles from './Navegation.module.css'


const links =[{
    label:'Home',
    route:'/'
  },{
    label:'Libros',
    route:'/libros'
  },{
    label:'Contacto',
    route:'/contacto'
  },
  {
    label:'About',
    route:'/about'
  }]
export default function Navegation(){
  
    return(
      <>
        <header className={styles.header}>
        <nav>
          <ul className={styles.navigation}>
            {links.map(({label,route})=>(
              <li key={route}>
                <Link href={route}>
                  <h1 className={styles.h1}> { label } </h1>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <br/>
      
      </>
    )
}