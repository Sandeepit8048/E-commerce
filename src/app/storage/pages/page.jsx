
import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard';
import { useCartStore } from '../cartStore';

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
          <aside className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-extrabold mb-6">Catγroy</h2>

  {/* Category Filter */}
  <div className="mb-6 space-y-4">
    {['All', 'Electronics', 'Clothing', 'Home'].map((category) => (
      <label key={category} className="flex items-center space-x-3">
        <input
          type="radio"
          name="category"
          value={category.toLowerCase()}
          defaultChecked={category === 'All'}
          className="text-blue-600 focus:ring-blue-500"
        />
        <span className="text-gray-900 font-semibold">{category}</span>
      </label>
    ))}
  </div>

  {/* Price Filter */}
  <div>
    <h3 className="text-lg font-bold mb-3">Price</h3>
    <input
      type="number"
      defaultValue={5000}
      className="w-full border border-gray-300 rounded-md p-2 text-gray-800"
    />
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
          <p>© 2025 SandeepSoap. All rights reserved.</p>
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