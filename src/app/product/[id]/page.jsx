import Link from "next/link";
import { Header } from "../../components/Header";
import { useCartStore } from "../../storage/cartStore";
import { ChevronLeft } from "lucide-react";
import { ProductImage } from "../[id]/ProductImage";
import { ProductInfo } from "../[id]/ProductInfo";
// import { AddToCart } from "../[id]/AddToCart";

const getProduct = async (id) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
};

export default async function ProductDetail({ params }) {
  let product;

  try {
    product = await getProduct(params.id);
  } catch (error) {
    console.error("Failed to load product:", error);
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-2xl font-bold mb-2 text-red-500">Product not found</h1>
          <Link href="/" className="text-indigo-600 hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const cartItemCount = useCartStore.getState().cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

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
            {/* <AddToCart product={product} /> */}
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2025 SandeepSoap. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
