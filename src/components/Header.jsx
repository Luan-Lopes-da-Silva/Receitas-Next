import Link from 'next/link'
import style from './header.module.scss'

export default function Header(){
return(
  <header className={style.header}>
  <h1>Cooking</h1>
  <nav>
    <ul>
    <Link href={'/'}>Home</Link>
    <Link href={'/desserts'}>Sobremesas</Link>
    <Link href={'/meat'}>Carnes</Link>
    <Link href={'/orders'}>Encomendas</Link>
    </ul>
  </nav>
</header>
)
}