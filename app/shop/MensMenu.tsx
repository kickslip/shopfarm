import Link from "next/link";

// components/shop/MensMenu.js
const MensMenu = () => {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Men&apos;s Shoes</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/collections/mens-sneakers" className="text-gray-600 hover:text-blue-600">
              Sneakers
            </Link>
          </li>
          <li>
            <Link href="/collections/mens-loafers" className="text-gray-600 hover:text-blue-600">
              Loafers & Drivers
            </Link>
          </li>
          <li>
            <Link href="/collections/mens-boots" className="text-gray-600 hover:text-blue-600">
              Boots & Oxfords
            </Link>
          </li>
          <li>
            <Link href="/collections/mens-clogs" className="text-gray-600 hover:text-blue-600">
              Clogs
            </Link>
          </li>
          <li>
            <Link href="/collections/mens-slippers" className="text-gray-600 hover:text-blue-600">
              Slippers
            </Link>
          </li>
          <li>
            <Link href="/collections/mens-new-arrivals" className="text-gray-600 hover:text-blue-600">
              Men&apos;s New Arrivals
            </Link>
          </li>
          <li>
            <Link href="/collections/mens-shoes" className="text-gray-600 hover:text-blue-600 font-medium">
              All Men&apos;s Shoes
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  export default MensMenu;