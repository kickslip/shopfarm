// components/Navbar.tsx
"use client"
import { useState } from 'react'
import Link from 'next/link'
import { ShoppingBag, Search, Globe, User } from 'lucide-react'
import FeaturedMenu from './FeaturedDropdownMenu'


interface NavbarProps {
  children: React.ReactNode
}

export default function Navbar({ children }: NavbarProps) {
  const [isFeaturedOpen, setIsFeaturedOpen] = useState(false)

  return (
    <nav className="sticky top-0 w-full bg-white z-50">
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
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Shopfarm
          </Link>

          {/* Main Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Shop Dropdown */}
            <div className="group relative">
              <Link 
                href="/shop" 
                className="py-4 hover:text-blue-600 border-b-2 border-transparent group-hover:border-blue-600"
              >
                SHOP
              </Link>
              {/* ShopMenu Container */}
              <div className="invisible group-hover:visible hover:visible absolute top-full left-1/2 -translate-x-1/2 w-screen bg-white shadow-lg border-t">
                {children}
              </div>
            </div>

            <Link href="/new" className="py-4 hover:text-blue-600">
              NEW
            </Link>

            {/* Featured Dropdown */}
            <div className="relative">
              <button 
                className="py-4 hover:text-blue-600"
                onMouseEnter={() => setIsFeaturedOpen(true)}
                onMouseLeave={() => setIsFeaturedOpen(false)}
              >
                FEATURED
              </button>
              
              {isFeaturedOpen && (
                <div 
                  className="absolute top-full left-1/2 -translate-x-1/2 w-screen bg-white shadow-lg border-t"
                  onMouseEnter={() => setIsFeaturedOpen(true)}
                  onMouseLeave={() => setIsFeaturedOpen(false)}
                >
                  <FeaturedMenu />
                </div>
              )}
            </div>
            
            <Link href="/sustainability" className="py-4 hover:text-blue-600">
              SUSTAINABILITY
            </Link>
            
            <Link href="/stores" className="py-4 hover:text-blue-600">
              STORES
            </Link>
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