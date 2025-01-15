"use client"

import { useState } from 'react';
import { Filter } from 'lucide-react';
import Link from 'next/link';

const NewArrivalsPage = () => {
  const [activeTab, setActiveTab] = useState('women');
  const [numProducts, setNumProducts] = useState({ women: 52, men: 14 });

  // Generate breadcrumb items based on active tab
  const getBreadcrumbItems = () => {
    const items = [
      { label: '< Back', href: '/' },
      { 
        label: activeTab === 'women' ? "Women's Shoes" : "Men's Shoes", 
        href: `/${activeTab}s-shoes` 
      },
      { 
        label: activeTab === 'women' ? "Women's New Arrivals" : "Men's New Arrivals", 
        href: `/${activeTab}s-new-arrivals` 
      }
    ];
    return items;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 mb-12 text-sm">
        {getBreadcrumbItems().map((item, index) => (
          <span key={index} className="flex items-center">
            <Link href={item.href} className="text-gray-600 hover:text-gray-900">
              {item.label}
            </Link>
            {index < getBreadcrumbItems().length - 1 && (
              <span className="mx-2 text-gray-400">|</span>
            )}
          </span>
        ))}
      </nav>

      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl text-navy-900 mb-4">
          {activeTab === 'women' ? "Women's" : "Men's"} New Arrivals
        </h1>
        <p className="text-gray-600">
          {activeTab === 'women' 
            ? "New styles are in town. And from classic bags to comfortable shoes, your feel-good favorites are just a step away."
            : "What's better than new styles? Get ready to go places in exceptional comfort with the latest additions to our lineup."}
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center space-x-8 mb-8">
        <button
          onClick={() => setActiveTab('women')}
          className={`pb-2 px-4 ${
            activeTab === 'women'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600'
          }`}
        >
          WOMEN'S NEW ARRIVALS
        </button>
        <button
          onClick={() => setActiveTab('men')}
          className={`pb-2 px-4 ${
            activeTab === 'men'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-600'
          }`}
        >
          MEN'S NEW ARRIVALS
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex justify-between items-center mb-8">
        <button className="flex items-center space-x-2 text-gray-700">
          <Filter size={20} />
          <span>Filter ({activeTab === 'women' ? numProducts.women : numProducts.men} products)</span>
        </button>
        <select className="border-none text-gray-700 focus:ring-0">
          <option>Featured</option>
          <option>Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 4 }).map((_, idx) => (
          <div key={idx} className="group cursor-pointer">
            <div className="relative aspect-square bg-gray-100 mb-4">
              <span className="absolute top-4 left-4 bg-white px-2 py-1 text-xs font-semibold">
                NEW
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="text-gray-900 group-hover:text-blue-600">Product Name</h3>
              <p className="text-gray-500">$165</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalsPage;