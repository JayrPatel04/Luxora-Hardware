import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">L</span>
              </div>
              <span className="text-white font-bold text-lg">
                Luxora <span className="text-amber-400">Hardware</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Premium architectural hardware and interior fittings for luxury spaces.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 rounded-full flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-zinc-800 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=handles"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Handles
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=knobs"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Knobs
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=cabinets"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Cabinet Hardware
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=accessories"
                  className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>123 Hardware Street, Mumbai, Maharashtra 400001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-amber-400">
                  +91 77180 96969
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@luxorahardware.com" className="hover:text-amber-400">
                  info@luxorahardware.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Luxora Hardware. All rights reserved. Premium Architectural Hardware & Interior Fittings.
          </p>
        </div>
      </div>
    </footer>
  );
}
