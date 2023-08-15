import { items,items2,items3,orders} from "@/db"
import Image from "next/image"
import style from './page.module.scss'

export const metadata = {
 title: 'Home' 
} 

export default function Home() {
  return (
   <>
   <main style={{backgroundColor:'white'}}>
    <section>
    <h2>Sobremesas</h2>
    <div className={style.cardContainer}>
    {items.map((item)=>(
    <div key={item.id} className={style.card}>
    <h3>{item.name}</h3>
    <Image
    src={item.img}
    alt='Img'
    height={300}
    width={300}
    />
    </div>
    ))}
    </div>
    </section>
    <section>
    <h2>Carnes</h2>
    <div className={style.cardContainer}>
    {items2.map((item)=>(
    <div key={item.id} className={style.card}>
    <h3>{item.name}</h3>
    <Image
    src={item.img}
    alt='Img'
    height={300}
    width={300}
    />
    </div>  
    ))}
    </div>
    </section>
    <section>
    <h2>Comida Japonesa</h2>
    <div className={style.cardContainer}>
    {items3.map((item)=>(
    <div key={item.id} className={style.card}>
    <h3>{item.name}</h3>
    <Image
    src={item.img}
    alt='Img'
    height={300}
    width={300}
    />
    </div>  
    ))}
    </div>
    </section>
    <section>
    <h2>Encomenda</h2>
    <div className={style.cardContainer}>
    {orders.map((item)=>(
    <div key={item.id} className={style.card}>
    <h3>{item.name}</h3>
    <Image
    src={item.img}
    alt='Img'
    height={300}
    width={300}
    />
    </div>  
    ))}
    </div>
    </section>
   </main>
   </>
  )
}
