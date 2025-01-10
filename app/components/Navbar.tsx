// components/Navbar.tsx
import Link from 'next/link'
import { ShoppingBag, Search, Globe, User } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full bg-background/80 backdrop-blur-sm z-50 ">
      {/* Announcement Bar */}
      <div className="relative bg-slate-50 py-2 text-center">
        <div className="flex justify-between px-4">
          <button className="text-slate-600">&lt;</button>
          <p className="text-sm">New styles added! Up to 50% off</p>
          <button className="text-slate-600">&gt;</button>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">Shopfarm</Link>
          
          {/* Main Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/shop" className="hover:text-blue-600">SHOP</Link>
            <Link href="/new" className="hover:text-blue-600">NEW</Link>
            <Link href="/featured" className="hover:text-blue-600">FEATURED</Link>
            <Link href="/sale" className="hover:text-blue-600">SALE</Link>
            <Link href="/sustainability" className="hover:text-blue-600">SUSTAINABILITY</Link>
            <Link href="/stores" className="hover:text-blue-600">STORES</Link>
          </div>
          
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 cursor-pointer" />
            <Globe className="h-5 w-5 cursor-pointer" />
            <User className="h-5 w-5 cursor-pointer" />
            <div className="relative">
              <ShoppingBag className="h-5 w-5 cursor-pointer" />
              <span className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-blue-600 text-xs text-white flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}