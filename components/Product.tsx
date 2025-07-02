// components/Product.jsx
import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

// Define a TypeScript interface for the Product object
interface ProductType {
  id: string;
  name: string;
  image: string;
  originalPrice: string;
  discountedPrice: string | null;
  isOnSale: boolean;
  isNew: boolean;
  rating: number;
  reviews: number;
  width: number;
  height: number;
}

// Dummy data for products. In a real application, this would come from an API or prop.
// Ensure your image paths match the actual location in your 'public' folder.
// For optimal performance, replace width and height with the actual dimensions of your images.
const products: ProductType[] = [ // Explicitly type the products array
  {
    id: '1',
    name: 'Elegant Laptop Stand',
    image: '/product1.png', // Assuming product1.jpg is in your public folder
    originalPrice: '49.99',
    discountedPrice: '39.99',
    isOnSale: true,
    isNew: false,
    rating: 4,
    reviews: 120,
    width: 600, // Replace with actual image width for optimal performance
    height: 400, // Replace with actual image height for optimal performance
  },
  {
    id: '2',
    name: 'Wireless Ergonomic Mouse',
    image: '/product2.png', // Assuming product2.jpg is in your public folder
    originalPrice: '29.00',
    discountedPrice: null,
    isOnSale: false,
    isNew: true,
    rating: 5,
    reviews: 75,
    width: 600, // Replace with actual image width for optimal performance
    height: 400, // Replace with actual image height for optimal performance
  },
  {
    id: '3',
    name: 'Portable Bluetooth Speaker',
    image: '/product1.png', // Reusing product1 for demonstration
    originalPrice: '75.50',
    discountedPrice: '60.00',
    isOnSale: true,
    isNew: false,
    rating: 3,
    reviews: 45,
    width: 600,
    height: 400,
  },
  {
    id: '4',
    name: 'High-Resolution Webcam',
    image: '/product2.png', // Reusing product2 for demonstration
    originalPrice: '55.00',
    discountedPrice: null,
    isOnSale: false,
    isNew: true,
    rating: 4,
    reviews: 90,
    width: 600,
    height: 400,
  },
  {
    id: '5',
    name: 'Noise-Cancelling Headphones',
    image: '/product1.png', // Reusing product1 for demonstration
    originalPrice: '120.00',
    discountedPrice: '99.99',
    isOnSale: true,
    isNew: false,
    rating: 5,
    reviews: 210,
    width: 600,
    height: 400,
  },
  {
    id: '6',
    name: 'Smart Home Hub',
    image: '/product2.png', // Reusing product2 for demonstration
    originalPrice: '89.00',
    discountedPrice: null,
    isOnSale: false,
    isNew: true,
    rating: 4,
    reviews: 60,
    width: 600,
    height: 400,
  },
];

// Define a TypeScript interface for StarRating props
interface StarRatingProps {
  rating: number;
  reviews: number;
}

// Helper component to render star ratings
const StarRating = ({ rating, reviews }: StarRatingProps) => { // Add type annotation here
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} className="text-yellow-400">★</span>);
  }
  // Add empty stars for the rest
  for (let i = fullStars; i < 5; i++) {
    stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
  }
  return (
    <div className="flex items-center text-sm">
      {stars}
      {reviews > 0 && <span className="ml-2 text-gray-500">({reviews})</span>}
    </div>
  );
};

// Define a TypeScript interface for ProductCard props
interface ProductCardProps {
  product: ProductType;
}

// Product Card Component
const ProductCard = ({ product }: ProductCardProps) => { // Add type annotation here
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full relative">
      {/* Sale/New Badge */}
      {product.isOnSale && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          - {((parseFloat(product.originalPrice) - parseFloat(product.discountedPrice || '0')) / parseFloat(product.originalPrice) * 100).toFixed(0)} %
        </span>
      )}
      {product.isNew && !product.isOnSale && ( // Show 'New' only if not on sale
        <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
          New
        </span>
      )}

      {/* Product Image */}
      <figure className="relative w-full h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={product.width}
          height={product.height}
          className="object-contain w-full h-full p-4" // Padding to prevent image touching edges
          loading="lazy" // Lazy load images not in the initial viewport
        />
      </figure>

      {/* Product Details */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate" title={product.name}>
          {product.name}
        </h3>
        <div className="mb-2">
          <StarRating rating={product.rating} reviews={product.reviews} />
        </div>
        <div className="flex items-baseline mb-4">
          {product.discountedPrice && (
            <p className="text-xl font-bold text-blue-600 mr-2">
              ${parseFloat(product.discountedPrice).toFixed(2)}
            </p>
          )}
          <p className={`${product.discountedPrice ? 'text-gray-400 line-through text-sm' : 'text-xl font-bold text-gray-800'}`}>
            ${parseFloat(product.originalPrice).toFixed(2)}
          </p>
        </div>
        <button
          className="mt-auto w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={`Add ${product.name} to cart`}
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

// Main Product Section Component
const Product = () => {
  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8" aria-labelledby="products-heading">
      <h2 id="products-heading" className="text-3xl font-extrabold text-gray-900 text-center mb-10">
        Featured Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Product;
