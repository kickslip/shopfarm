import Link from "next/link";

// components/shop/KidsMenu.js
const KidsMenu = () => {
    return (
      <div>
        <h3 className="text-lg font-medium mb-4">Kids</h3>
        <ul className="space-y-2">
          <li>
            <Link href="/collections/kids-mini-styles" className="text-gray-600 hover:text-blue-600">
              Matching Mini Styles
            </Link>
          </li>
          <li>
            <Link href="/collections/kids-shoes" className="text-gray-600 hover:text-blue-600 font-medium">
              All Kid&apos;s Shoes
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  export default KidsMenu;
    