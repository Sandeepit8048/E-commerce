import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';
import { useCartStore } from './storage/cartStore';

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
      
      <main className="flex-grow container mx-auto px-4 py-8 ">
        <div className="flex flex-col md:flex-row gap-8 bg-gray-50 p-4 rounded-lg shadow-sm  ">
          {/* Sidebar */}
         < div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm">
          <aside className="w-full md:w-45 p-4 rounded-lg shadow-sm bg-blue-700">
            <h2 className="font-bold text-lg mb-4 text-white">Filters</h2>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-2 text-white">Categories</h3>
              <div className="space-y-2">
                {['electronics', 'jewelery', "men's clothing", "women's clothing"].map((category) => (
                  <label key={category} className="flex items-center space-x-2 text-white">
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
              <h3 className="font-semibold mb-2 text-white">Price Range</h3>
              <input
                type="range"
                min="0"
                max="1000"
                step="10"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-200 mt-1">
                <span>$0</span>
                <span>$1000</span>
              </div>
            </div>
          </aside>


           <div className="space-y-4 mt-7">
             <h2 className='font-bold  ' >Cacyroy </h2>
        {['All', 'Electronics', 'Clothing', 'Home'].map((item) => (
          <label key={item} className="flex items-center space-x-3">
            <input
              type="radio"
              name="category"
              value={item.toLowerCase()}
              defaultChecked={item === 'All'}
              className="text-blue-600 focus:ring-blue-500"
            />
            <span className="text-gray-800 font-medium">{item}</span>
          </label>
        ))}
      </div>

      {/* Price Input */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-900">Price</h3>
        <input
          type="number"
          defaultValue={500}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
          </div>
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
      
    <footer className="bg-blue-900 text-white py-10">
  <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
    
    {/* Filters Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      <div className="space-y-1">
        <p>All</p>
        <p className="font-semibold tracking-widest text-sm">ELEℨtronK</p>
      </div>
      <p className="mt-6 text-sm text-gray-300">© 2024 American</p>
    </div>

    {/* About Us Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">About Us</h3>
      <div className="space-y-1">
        <a href="#" className="hover:underline block">About Us</a>
        <a href="#" className="hover:underline block">Contact</a>
      </div>
    </div>

    {/* Follow Us Section */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
      <div className="flex justify-center md:justify-start space-x-4">
        <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 5.01 3.66 9.16 8.44 9.93v-7.03h-2.54v-2.9h2.54V9.75c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.77 8.44-4.92 8.44-9.93z"/>
          </svg>
        </a>
        <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1s-1.64.93-2.43 1.21A4.48 4.48 0 0 0 16.5 0c-2.5 0-4.5 2.13-4.5 4.76 0 .37.04.73.12 1.07C8.05 5.69 4.3 3.76 1.64.79a4.93 4.93 0 0 0-.6 2.39c0 1.65.83 3.1 2.1 3.95A4.28 4.28 0 0 1 1.2 6v.06c0 2.31 1.57 4.24 3.66 4.68a4.37 4.37 0 0 1-2.04.08 4.5 4.5 0 0 0 4.21 3.19A9 9 0 0 1 0 19.54a12.89 12.89 0 0 0 7 2.03c8.4 0 13-7.38 13-13.77 0-.21 0-.42-.01-.63A9.23 9.23 0 0 0 23 3z"/>
          </svg>
        </a>
        <a href="#" className="bg-blue-700 hover:bg-blue-600 p-2 rounded-full">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 4a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 18.5 6.5zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
          </svg>
        </a>
      </div>
    </div>

  </div>
</footer>

    </div>
  );
}