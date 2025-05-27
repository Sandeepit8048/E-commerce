import { Header } from '../components/Header';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { ProductImage } from './ProductImage';
import { ProductInfo } from './ProductInfo';
import { AddToCart } from './AddToCart';

const getProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

export default async function ProductDetail({ params }) {
  const product = await getProduct(params.id);
  const cartItemCount = useCartStore.getState().cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={cartItemCount} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link href="/" className="flex items-center text-indigo-600 mb-4">
          <ChevronLeft className="w-5 h-5" />
          <span>Back to products</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8">
          <ProductImage image={product.image} title={product.title} />
          
          <div className="w-full md:w-1/2">
            <ProductInfo product={product} />
            <AddToCart product={product} />
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 ShopEase. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}