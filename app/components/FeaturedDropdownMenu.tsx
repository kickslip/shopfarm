"use client"
import Link from 'next/link'
import Image from 'next/image'

const FeaturedMenu = () => {
  return (
    <div className="w-full bg-white px-20">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-4 gap-12">
          {/* Left Navigation Menu */}
          <div className="space-y-4">
            <Link 
              href="/best-sellers" 
              className="block text-gray-800 hover:text-blue-600 text-sm"
            >
              Best Sellers
            </Link>
            <Link 
              href="/basketweave-collection" 
              className="block text-gray-800 hover:text-blue-600 text-sm"
            >
              The Basketweave Collection
            </Link>
            <Link 
              href="/neutral-shoes-bags" 
              className="block text-gray-800 hover:text-blue-600 text-sm"
            >
              Neutral Shoes & Bags
            </Link>
            <Link 
              href="/travel-bags" 
              className="block text-gray-800 hover:text-blue-600 text-sm"
            >
              Travel Bags
            </Link>
            <Link 
              href="/bag-bar" 
              className="block text-gray-800 hover:text-blue-600 text-sm"
            >
              The Bag Bar
            </Link>
          </div>

          {/* Featured Promotional Sections */}
          <div className="col-span-3 grid grid-cols-3 gap-8">
            {/* Must-Have Neutrals */}
            <Link href="/collections/neutrals" className="block group">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src="/images/featured/cult-fave-clogs.jpg"
                  alt="Must-Have Neutrals Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-navy text-sm font-medium tracking-wider">
                MUST-HAVE NEUTRALS
              </h3>
            </Link>

            {/* New Men's Clog */}
            <Link href="/collections/mens-clog" className="block group">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src="/images/featured/mens-clog.jpg"
                  alt="New Men's Clog Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-navy text-sm font-medium tracking-wider">
                NEW! THE MEN&apos;S CLOG
              </h3>
            </Link>

            {/* New Basketweave Bags */}
            <Link href="/collections/basketweave-bags" className="block group">
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src="/images/featured/basketweave-bags.jpg"
                  alt="New Basketweave Bags Collection"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-navy text-sm font-medium tracking-wider">
                NEW BASKETWEAVE BAGS
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMenu