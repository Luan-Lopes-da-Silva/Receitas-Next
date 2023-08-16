import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import { Bitter } from 'next/font/google'
import './globals.css'

const bitter = Bitter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={bitter.className}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
