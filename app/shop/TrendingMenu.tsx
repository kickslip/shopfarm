import { Link } from "lucide-react";

// components/shop/TrendingMenu.js
const TrendingMenu = () => {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Trending Now</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/collections/best-sellers" className="text-gray-600 hover:text-blue-600">
              Best Sellers
            </Link>
          </li>
          <li>
            <Link href="/collections/bag-bar" className="text-gray-600 hover:text-blue-600">
              The Bag Bar
            </Link>
          </li>
          <li>
            <Link href="/collections/mary-janes" className="text-gray-600 hover:text-blue-600">
              Mary Janes
            </Link>
          </li>
          <li>
            <Link href="/collections/clogs" className="text-gray-600 hover:text-blue-600">
              Clogs
            </Link>
          </li>
          <li>
            <Link href="/collections/points" className="text-gray-600 hover:text-blue-600">
              Points
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  export default TrendingMenu;