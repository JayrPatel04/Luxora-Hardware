'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import productsData from '@/data/products.json';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = '7718096969';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center space-x-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition-transform">
              <span className="text-black font-bold text-xl">L</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              Luxora <span className="text-amber-400">Hardware</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              Products
            </Link>

            {/* <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <button className="text-gray-300 hover:text-amber-400 transition-colors font-medium flex items-center gap-1">
                Categories
                <ChevronDown className="w-4 h-4" />
              </button>
              {showDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl py-2">
                  {productsData.categories.map((category) => (
                    <Link
                      key={category.id}
                      href={`/products?category=${category.id}`}
                      className="block px-4 py-2 text-gray-300 hover:bg-zinc-800 hover:text-amber-400 transition-colors"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div> */}

            <Link
              href="/about"
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              Contact
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in Luxora Hardware products`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-2.5 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all hover:shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-300 hover:text-amber-400 hover:bg-zinc-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-gray-300 hover:text-amber-400 hover:bg-zinc-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              {/* <div className="px-3 py-2 text-gray-400 font-medium text-sm">
                Categories
              </div>
              {productsData.categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/products?category=${category.id}`}
                  className="block px-6 py-2 text-gray-300 hover:text-amber-400 hover:bg-zinc-800 rounded-md transition-colors text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))} */}
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-300 hover:text-amber-400 hover:bg-zinc-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-amber-400 hover:bg-zinc-800 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi, I'm interested in Luxora Hardware products`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mx-3 mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-2.5 rounded-lg font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
