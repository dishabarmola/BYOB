import React from 'react';
import product1 from '../../assets/product1.jpg';
import product2 from '../../assets/product2.jpg';
import product3 from '../../assets/product3.webp';
import product4 from '../../assets/product4.jpeg';
import product5 from '../../assets/product5.jpg';

const products = [
  {
    id: 1,
    name: 'Dark Black Sneakers',
    description: 'Super Comfortable Sneakers.',
    imageUrl: product2,
    price: 'Rs 1799.00',
  },
  {
    id: 2,
    name: 'Swadeshi Blessings',
    description: 'Handmade, eco-friendly, and sustainable products that are good for you and the planet. Made with love and care.',
    imageUrl: product1,
    price: 'Rs 899.00',
  },
  {
    id: 3,
    name: 'JayWalking Tshirts',
    description: 'Stylish and comfortable T-shirts for everyday wear. Made with 100% organic cotton and eco-friendly dyes.',
    imageUrl: product3,
    price: 'Rs 600.00',
  },
  {
    id: 4,
    name: 'Anokhi Handkerchief',
    description: 'Handmade, eco-friendly, and sustainable products that are good for you and the planet. Made with love and care.',
    imageUrl: product4,
    price: 'Rs 250.00',
  },
  {
    id: 5,
    name: 'The India Craft House Gifts',
    description: 'Handmade, eco-friendly, and sustainable products that are good for you and the planet. Made with love and care.',
    imageUrl: product5,
    price: 'Rs 1500.00',
  },
];

const ProductCard = ({ product }) => (
  <div className="flex flex-col bg-white rounded-lg shadow-md p-4 m-2 w-60">
    <div className="overflow-hidden rounded-md mb-2">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
    </div>
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <p className="text-gray-600 mb-2">{product.description}</p>
    <span className="text-xl font-bold mb-2">{product.price}</span>
    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition">
      Buy Now
    </button>
  </div>
);

const Product = () => (
  <div className="max-w-full mx-auto p-6 mt-20">
    
      <h1 className="text-5xl font-bold text-center mb-8">
      <span className="text-black">BYOB- Build your </span>
      <span className="text-red-500">Own</span>
      <span className="text-black"> Business</span>


    </h1>
    <h3 className="text-xl font-bold text-center text-black mb-2">
        Trending Products
      </h3>

    {/* Product Cards */}
    <div className="flex justify-center items-center flex-wrap">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default Product;


