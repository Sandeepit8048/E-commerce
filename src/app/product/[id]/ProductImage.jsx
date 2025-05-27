import Image from 'next/image';

export const ProductImage = ({ image, title }) => {
  return (
    <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-sm">
      <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          width={500}
          height={500}
          priority
        />
      </div>
    </div>
  );
};