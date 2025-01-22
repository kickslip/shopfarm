import Link from "next/link";

// components/shop/WomensMenu.js
const WomensMenu = () => {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Women&apos;s Shoes</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/collections/womens-flats" className="text-gray-600 hover:text-blue-600">
              Flats
            </Link>
          </li>
          <li>
            <Link href="/collections/womens-heels" className="text-gray-600 hover:text-blue-600">
              Heels
            </Link>
          </li>
          <li>
            <Link href="/collections/womens-mary-janes" className="text-gray-600 hover:text-blue-600">
              Mary Janes
            </Link>
          </li>
          <li>
            <Link href="/collections/womens-clogs" className="text-gray-600 hover:text-blue-600">
              Clogs
            </Link>
          </li>
          <li>
            <Link href="/collections/womens-boots" className="text-gray-600 hover:text-blue-600">
              Boots
            </Link>
          </li>
          <li>
            <Link href="/collections/womens-loafers" className="text-gray-600 hover:text-blue-600">
              Loafers & Mules
            </Link>
          </li>
          <li>
            <Link href="/collections/womens-sneakers" className="text-gray-600 hover:text-blue-600">
              Sneakers
            </Link>
          </li>
          <li>
            <Link href="/collections/womens-sandals" className="text-gray-600 hover:text-blue-600">
              Sandals
            </Link>
          </li>
          <li>
            <Link href="/collections/womens-slippers" className="text-gray-600 hover:text-blue-600">
              Slippers
            </Link>
          </li>
          <li>
            <Link href="/collections/womens-shoes" className="text-gray-600 hover:text-blue-600 font-medium">
              All Women&apos;s Shoes
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  export default WomensMenu;