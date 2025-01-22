// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import ShopMenu from './components/ShopMenu'


export const metadata: Metadata = {
  title: 'Modern Fashion Store',
  description: 'Sustainable fashion and accessories',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar>
          <ShopMenu />
        </Navbar>
        {children}
      </body>
    </html>
  )
}
