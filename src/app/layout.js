import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeContextProvider } from '@/context/ThemeContext'
import ThemeProvider from '@/Providers/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'denizblog',
  description: `welcome to Deniz's blog`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <Navbar/>
            {children}
            <Footer/>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
