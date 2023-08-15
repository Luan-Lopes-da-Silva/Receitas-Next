import Footer from '@/src/components/Footer'
import Header from '@/src/components/Header'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  )
}
