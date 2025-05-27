import { Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
// import { Header } from '@/components/Header';
// import { Header } from '../components/Header'; // adjust path as needed

import PropTypes from 'prop-types';

export const Header = ({ cartItemCount }) => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          ShopEase
        </Link>
        
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" />
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="/cart" className="relative">
            <ShoppingCart className="text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </Link>
          <User className="text-gray-700" />
        </div>
      </div>
    </header>
  );

};

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};