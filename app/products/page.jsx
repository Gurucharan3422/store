'use client';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow flex flex-col justify-between min-h-[400px]"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain mb-4"
            />
            <div className="flex-1 flex flex-col">
              <h3 className="text-md font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">${product.price}</p>
              <div className="mt-auto">
                <button className="w-full bg-black text-white px-3 py-2 rounded hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}