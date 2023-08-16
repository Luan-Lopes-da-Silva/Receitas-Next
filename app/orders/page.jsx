import { items3 } from "@/db"
import style from './page.module.scss'
import Image from "next/image"

export const metadata = {
title:'Encomendas'  
}

export default function Orders(){
  return(
  <main className={style.main}>
  <div className={style.cardContainer}>
  {items3.map((item)=>(
  <div key={item.id} className={style.card}>
  <p>{item.name}</p>
  <Image
  src={item.img}
  alt={item.name}
  width={300}
  height={300}
  className={style.img}
  />
  </div>
  ))}  
  
  </div>  
  </main>
  )
}