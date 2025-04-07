'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      router.push('/auth/login');
    }
  }, []);

  const categories = [
    {
      name: 'Fashion',
      image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Bags',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1P8FSyH5tabcm329dAOgeGH2skEsKe7lMow&s',
    },
    {
      name: 'Shoes',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s',
    },
    {
      name: 'Gadgets',
      image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 bg-gray-100">
        <div className="max-w-xl">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4">New Product Collection</h1>
          <p className="text-gray-600 mb-6">Check out our latest arrivals and top fashion picks curated just for you.</p>
          <button
            onClick={() => router.push('/products')}
            className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
          >
            Shop Now
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/dbm5aehnv/image/upload/v1744049357/WhatsApp_Image_2025-04-07_at_23.38.11_ojukfl.jpg"
          alt="Model"
          className="w-64 h-auto rounded-lg mt-10 md:mt-0"
        />
      </section>

      {/* Featured Categories */}
      <section className="px-6 md:px-20 py-12 bg-white">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Featured Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg flex flex-col items-center justify-center shadow-sm hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-full mb-3"
              />
              <span className="font-medium text-gray-700">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-12 text-center px-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At PLP Store, we’re committed to bringing you the best and most affordable products in fashion, tech, and lifestyle.
        </p>
      </section>
    </div>
  );
}