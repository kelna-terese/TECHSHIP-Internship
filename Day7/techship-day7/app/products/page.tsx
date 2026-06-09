"use client";

import { useEffect, useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Product Listing Page
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 p-5 rounded-lg shadow-lg"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />

            <h2 className="text-lg font-bold text-black mt-4">
              {product.title}
            </h2>

            <p className="text-green-700 font-bold mt-2">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}