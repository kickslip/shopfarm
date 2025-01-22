import Link from "next/link";


// components/shop/BagsMenu.js
const BagsMenu = () => {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Bags & Accessories</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/collections/totes" className="text-gray-600 hover:text-blue-600">
              Totes
            </Link>
          </li>
          <li>
            <Link href="/collections/crossbody-bags" className="text-gray-600 hover:text-blue-600">
              Crossbody & Belt Bags
            </Link>
          </li>
          <li>
            <Link href="/collections/shoulder-bags" className="text-gray-600 hover:text-blue-600">
              Shoulder & Top Handle Bags
            </Link>
          </li>
          <li>
            <Link href="/collections/backpacks" className="text-gray-600 hover:text-blue-600">
              Backpacks
            </Link>
          </li>
          <li>
            <Link href="/collections/wallets" className="text-gray-600 hover:text-blue-600">
              Wallets & Clutches
            </Link>
          </li>
          <li>
            <Link href="/collections/travel" className="text-gray-600 hover:text-blue-600">
              Travel Bags & Pouches
            </Link>
          </li>
          <li>
            <Link href="/collections/straps" className="text-gray-600 hover:text-blue-600">
              Bag Straps
            </Link>
          </li>
          <li>
            <Link href="/collections/accessories" className="text-gray-600 hover:text-blue-600">
              Small Accessories
            </Link>
          </li>
          <li>
            <Link href="/collections/home" className="text-gray-600 hover:text-blue-600">
              Home Accessories
            </Link>
          </li>
          <li>
            <Link href="/collections/bag-bar" className="text-gray-600 hover:text-blue-600">
              The Bag Bar
            </Link>
          </li>
          <li>
            <Link href="/collections/bags-accessories" className="text-gray-600 hover:text-blue-600 font-medium">
              All Bags & Accessories
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  export default BagsMenu;
  