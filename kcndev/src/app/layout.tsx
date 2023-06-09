import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KCN Website',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='py-2'><NavBar  /></div>
        {children}
        </body>
    </html>
  )
}
