import { Search, ShoppingCart, } from 'lucide-react';
import Link from 'next/link';
import PropTypes from 'prop-types';

export const Header = ({  }) => {
  return (
    <header className=" shadow-sm py-4 px-6 sticky top-0 z-10 bg-blue-700">
      <div className="container mx-auto flex items-center justify-between  p-4 rounded-lg ">
      <Link href="/" className="text-4xl font-bold text-white hover:text-gray-200 transition-colors">
        Logo
      </Link>

        
        <div className="relative w-1/3 text-white ">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <Search className="absolute right-3 top-2.5 text-gray-400" />
        </div>
       <div className="flex items-center space-x-4">
  <Link
    href="/cart"
    className="flex items-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
  >
    <ShoppingCart className="text-white mr-2" />
     Cart
  </Link>
  {/* <User className="text-gray-700" /> */}
</div>
        
      </div>
    </header>
  );

};

Header.propTypes = {
  cartItemCount: PropTypes.number.isRequired,
};