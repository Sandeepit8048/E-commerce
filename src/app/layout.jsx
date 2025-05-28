import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ShopEase - Your Online Shopping Destination',
  description: 'Discover amazing products at great prices',
};

export default function RootLayout({ children }) {
  return (
    <>
    
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>

    {/* <div className="relative w-full h-64"> */}
  {/* <image
    src={product.image}
    alt={product.title}
    fill
    className="object-contain"
  />
</div> */}
    </>
    
  );
}