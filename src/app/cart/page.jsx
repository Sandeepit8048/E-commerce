'use client';
import { Header } from '../components/Header';
import { Trash2, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '../storage/cartStore';


export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemCount={cartItemCount} />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>
        
        {cart.length === 0 ? (
          <div className="text-center py-12">
            <ShoppingCart className="mx-auto w-12 h-12 text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-4">Looks like you haven't added anything to your cart yet</p>
            <Link
              href="/"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <div key={item.id} className="p-4 flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-24 h-24 bg-gray-200 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-indigo-600 font-bold">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                          >
                            -
                          </button>
                          <span className="px-4 py-1">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={clearCart}
                  className="text-red-500 hover:text-red-700 flex items-center space-x-1"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Clear Cart</span>
                </button>
              </div>
            </div>
            
            <div className="w-full lg:w-80">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="font-bold text-lg mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-3 border-t border-gray-200">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                  Checkout
                </button>
              </div>
              
              <div className="mt-4">
                <Link
                  href="/"
                  className="block text-center text-indigo-600 hover:text-indigo-800"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 SandeepSoap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}