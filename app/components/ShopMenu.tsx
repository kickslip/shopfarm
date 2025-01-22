"use client"
import Link from 'next/link'
import Image from 'next/image'

const ShopMenu = () => {
  return (
    <div className="grid grid-cols-5 gap-8 p-12 bg-white w-screen max-w-7xl mx-auto">
      {/* Trending Now Column */}
      <div>
        <h2 className="text-lg font-medium mb-4">Trending Now</h2>
        <div className="space-y-2">
          <Link href="/best-sellers" className="block text-gray-600 hover:text-blue-600">Best Sellers</Link>
          <Link href="/bag-bar" className="block text-gray-600 hover:text-blue-600">The Bag Bar</Link>
          <Link href="/mary-janes" className="block text-gray-600 hover:text-blue-600">Mary Janes</Link>
          <Link href="/clogs" className="block text-gray-600 hover:text-blue-600">Clogs</Link>
          <Link href="/points" className="block text-gray-600 hover:text-blue-600">Points</Link>
        </div>
      </div>

      {/* Women's Shoes Column */}
      <div>
        <h2 className="text-lg font-medium mb-4">Women&apos;s Shoes</h2>
        <div className="space-y-2">
          <Link href="/womens/flats" className="block text-gray-600 hover:text-blue-600">Flats</Link>
          <Link href="/womens/heels" className="block text-gray-600 hover:text-blue-600">Heels</Link>
          <Link href="/womens/mary-janes" className="block text-gray-600 hover:text-blue-600">Mary Janes</Link>
          <Link href="/womens/clogs" className="block text-gray-600 hover:text-blue-600">Clogs</Link>
          <Link href="/womens/boots" className="block text-gray-600 hover:text-blue-600">Boots</Link>
          <Link href="/womens/loafers" className="block text-gray-600 hover:text-blue-600">Loafers & Mules</Link>
          <Link href="/womens/sneakers" className="block text-gray-600 hover:text-blue-600">Sneakers</Link>
          <Link href="/womens/sandals" className="block text-gray-600 hover:text-blue-600">Sandals</Link>
          <Link href="/womens/slippers" className="block text-gray-600 hover:text-blue-600">Slippers</Link>
          <Link href="/womens/all" className="block text-gray-600 hover:text-blue-600">All Women&apos;s Shoes</Link>
        </div>
      </div>

      {/* Bags & Accessories Column */}
      <div>
        <h2 className="text-lg font-medium mb-4">Bags & Accessories</h2>
        <div className="space-y-2">
          <Link href="/bags/totes" className="block text-gray-600 hover:text-blue-600">Totes</Link>
          <Link href="/bags/crossbody" className="block text-gray-600 hover:text-blue-600">Crossbody & Belt Bags</Link>
          <Link href="/bags/shoulder" className="block text-gray-600 hover:text-blue-600">Shoulder & Top Handle Bags</Link>
          <Link href="/bags/backpacks" className="block text-gray-600 hover:text-blue-600">Backpacks</Link>
          <Link href="/bags/wallets" className="block text-gray-600 hover:text-blue-600">Wallets & Clutches</Link>
          <Link href="/bags/travel" className="block text-gray-600 hover:text-blue-600">Travel Bags & Pouches</Link>
          <Link href="/accessories/straps" className="block text-gray-600 hover:text-blue-600">Bag Straps</Link>
          <Link href="/accessories/small" className="block text-gray-600 hover:text-blue-600">Small Accessories</Link>
          <Link href="/accessories/home" className="block text-gray-600 hover:text-blue-600">Home Accessories</Link>
          <Link href="/bags/bag-bar" className="block text-gray-600 hover:text-blue-600">The Bag Bar</Link>
          <Link href="/bags/all" className="block text-gray-600 hover:text-blue-600">All Bags & Accessories</Link>
        </div>
      </div>

      {/* Men's Shoes & Kids Column */}
      <div className="space-y-8">
        <div>
          <h2 className="text-lg font-medium mb-4">Men&apos;s Shoes</h2>
          <div className="space-y-2">
            <Link href="/mens/sneakers" className="block text-gray-600 hover:text-blue-600">Sneakers</Link>
            <Link href="/mens/loafers" className="block text-gray-600 hover:text-blue-600">Loafers & Drivers</Link>
            <Link href="/mens/boots" className="block text-gray-600 hover:text-blue-600">Boots & Oxfords</Link>
            <Link href="/mens/clogs" className="block text-gray-600 hover:text-blue-600">Clogs</Link>
            <Link href="/mens/slippers" className="block text-gray-600 hover:text-blue-600">Slippers</Link>
            <Link href="/mens/new" className="block text-gray-600 hover:text-blue-600">Men&apos;s New Arrivals</Link>
            <Link href="/mens/all" className="block text-gray-600 hover:text-blue-600">All Men&apos;s Shoes</Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Kids</h2>
          <div className="space-y-2">
            <Link href="/kids/matching" className="block text-gray-600 hover:text-blue-600">Matching Mini Styles</Link>
            <Link href="/kids/all" className="block text-gray-600 hover:text-blue-600">All Kid&apos;s Shoes</Link>
          </div>
        </div>
      </div>

      {/* Promotional Images Column */}
      <div className="space-y-6">
        <Link href="/womens/mary-janes" className="block">
          <div className="relative">
            <Image
              src="/images/mary-janes-promo.jpg"
              alt="New Mary Janes Collection"
              width={400}
              height={300}
              className="w-full object-cover rounded-lg"
            />
            <div className="mt-2 font-medium">NEW MARY JANES</div>
          </div>
        </Link>
        
        <Link href="/womens/clogs" className="block">
          <div className="relative">
            <Image
              src="/images/buckle-clog-promo.jpg"
              alt="Shop the Buckle Clog"
              width={400}
              height={300}
              className="w-full object-cover rounded-lg"
            />
            <div className="mt-2 font-medium">SHOP THE BUCKLE CLOG</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ShopMenu