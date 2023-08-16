import { items } from "@/db"
import Image from "next/image"
import style from "./page.module.scss"
import Rating from "@/src/components/Rating"

export const metadata = {
  title: 'Sobremesas' 
}

export default function Ola(){
  return(
    <main className={style.main}>
    <div className={style.cardContainer}>
    {items.map((item)=>(
    <div key={item.id} className={style.card}>
    <p>{item.name}</p>
    <Image
    height={300}
    width={300}
    src={item.img}
    alt={item.name}
    className={style.img}
    />
    <Rating/>
    </div>
    ))}
    </div>
    <div className={style.cardContainer}>
    {items.map((item)=>(
    <div key={item.id} className={style.card}>
    <p>{item.name}</p>
    <Image
    height={300}
    width={300}
    src={item.img}
    alt={item.name}
    className={style.img}
    />
    <Rating/>
    </div>
    ))}
    </div>
    <div className={style.cardContainer}>
    {items.map((item)=>(
    <div key={item.id} className={style.card}>
    <p>{item.name}</p>
    <Image
    height={300}
    width={300}
    src={item.img}
    alt={item.name}
    className={style.img}
    />
    </div>
    ))}
    </div>
    </main>
    
    
  )
}