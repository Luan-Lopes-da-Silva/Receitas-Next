import { items2 } from "@/db"
import style from './page.module.scss'
import Image from "next/image"

export const metadata = {
title:'Carnes'  
}

export default function Meat(){
return(
  <main className={style.main}>
  <div className={style.cardContainer}>
  {items2.map((item)=>(
  <div key={item.id} className={style.card}>
  <p>{item.name}</p>
  <Image
  src={item.img}
  width={300}
  height={300}
  alt={item.name}
  className={style.img}
  />
  </div>  
  ))}
  </div>
  <div className={style.cardContainer}>
  {items2.map((item)=>(
  <div key={item.id} className={style.card}>
  <p>{item.name}</p>
  <Image
  src={item.img}
  width={300}
  height={300}
  alt={item.name}
  className={style.img}
  />
  </div>  
  ))}
  </div>
  <div className={style.cardContainer}>
  {items2.map((item)=>(
  <div key={item.id} className={style.card}>
  <p>{item.name}</p>
  <Image
  src={item.img}
  width={300}
  height={300}
  alt={item.name}
  className={style.img}
  />
  </div>  
  ))}
  </div>
  </main>
)  
}