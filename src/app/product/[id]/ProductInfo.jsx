import { Star } from 'lucide-react';

export const ProductInfo = ({ product }) => {
  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < Math.floor(product.rating.rate) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        <span className="text-gray-500 ml-2">({product.rating.count} reviews)</span>
      </div>
      
      <p className="text-3xl font-bold text-indigo-600 mb-6">${product.price}</p>
      
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Description</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>
      
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Category</h2>
        <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm capitalize">
          {product.category}
        </span>
      </div>
    </div>
  );
};