import { Inter } from 'next/font/google'
import Navigation from "./components/navigation";
import './globals.css'
import Footer from './components/footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Path'O Calme",
  description: 'Mini ferme au naturel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
