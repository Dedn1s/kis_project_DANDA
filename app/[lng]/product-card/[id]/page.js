'use client';  // Директива для Client Component

import { useState, useEffect } from 'react';
import { Inter } from "next/font/google";
import ProductCard from "../../components/ProductCard"; // Импортируем компонент ProductCard
import { Header } from '../../components/Header';
import { SimilarItems } from '../../components/SimilarItems';
import { Footer } from '../../components/Footer';
import { useTranslation } from '../../../i18n/client'
import { useParams } from 'next/navigation';
import products from '@/public/product.json'

const inter = Inter({ subsets: ['latin'] });

export default function Home({params: { lng }}) {

  const { t } = useTranslation(lng)
  const params = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Загрузка данных из public/products.json
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        // Выбираем первый продукт или случайный
        setProduct(data[params.id]);  // Или data[Math.floor(Math.random() * data.length)] для случайного
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, []);

  if (!product) return <p>Загрузка...</p>;

  return (
    <main className={inter.className}>
      <Header lng={lng}/>
      <ProductCard product={product} lng={lng} />
      <SimilarItems lng={lng}/>
      <Footer lng={lng}/>
    </main>
  );
}