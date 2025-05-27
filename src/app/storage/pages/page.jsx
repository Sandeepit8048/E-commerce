import { Header } from '@/components/Header';
import { ProductCard } from '@/components/ProductCard';
import { useCartStore } from '@/store/cartStore';

const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
};

export default async function Home() {
  const products = await getProducts();
  const cartItemCount = useCartStore.getState().cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={cartItemCount} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm">
            <h2 className="font-bold text-lg mb-4">Filters</h2>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Categories</h3>
              <div className="space-y-2">
                {['electronics', 'jewelery', "men's clothing", "women's clothing"].map((category) => (
                  <label key={category} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="rounded text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="capitalize">{category}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-2">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </aside>
          
          {/* Product Grid */}
          <div className="flex-grow">
            <h1 className="text-2xl font-bold mb-6">All Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2023 ShopEase. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-indigo-600">Facebook</a>
            <a href="#" className="hover:text-indigo-600">Twitter</a>
            <a href="#" className="hover:text-indigo-600">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}