
// components/CategoryNav.tsx
import Link from 'next/link'

export default function CategoryNav() {
  const categories = [
    "WOMEN'S SHOES",
    "NEW ARRIVALS",
    "BEST SELLERS",
    "BAGS",
    "MEN'S SHOES"
  ]
  
  return (
    <div className="border-b">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8 py-4 overflow-x-auto">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-medium hover:text-blue-600 whitespace-nowrap"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
