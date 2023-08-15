import style from './header.module.scss'

export default function Header(){
return(
  <header className={style.header}>
  <h1>Cooking</h1>
  <nav>
    <ul>
      <li>Home</li>
      <li>Sobremesas</li>
      <li>Carnes</li>
      <li>Encomendas</li>
    </ul>
  </nav>
</header>
)
}