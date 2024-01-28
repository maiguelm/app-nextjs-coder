import { Header } from './components/ui/Header'
import Footer from './components/ui/Footer'
import './globals.css'


export const metadata = {
  title: 'Lemonies Pasteleria Artesanal',
  description: 'Pasteleria Artesanal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
