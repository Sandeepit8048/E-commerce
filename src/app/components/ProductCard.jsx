'use client'; 
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '../storage/cartStore';

export const ProductCard = ({ product }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/product/${product.id}`}>
          <div className="bg-white p-4 rounded-lg shadow-sm">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        className="object-contain w-full h-64"
      />
      <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-lg mb-1 line-clamp-1">{product.title}</h3>
        </Link>
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating.rate)
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-1">({product.rating.count})</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-black-600">${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Add to Cart  
          </button>
        </div>
      </div>
    </div>
  );
};
