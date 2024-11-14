// app/page.js
'use client';  // Директива для Client Component

import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import ProductCard from "./components/ProductCard"; // Импортируем компонент ProductCard

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Загрузка данных из public/products.json
    fetch('/products.json')
      .then((response) => response.json())
      .then((data) => {
        // Выбираем первый продукт или случайный
        setProduct(data[0]);  // Или data[Math.floor(Math.random() * data.length)] для случайного
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, []);

  if (!product) return <p>Загрузка...</p>;

  return (
    <main className={inter.className}>
      <ProductCard product={product} />
    </main>
  );
}