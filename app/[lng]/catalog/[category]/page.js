"use client"

import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../../i18n/client'
import { useParams } from 'next/navigation';

import Catalog_list from '../../components/Catalog_list';
import products_file from '@/public/product.json';
import { CategoriesList } from '../../components/CategoriesLIst';

export default function Catalog({ params: { lng } }) {

  const { t } = useTranslation(lng, 'catalog')
  const params = useParams();

  const brand_counts = products_file.reduce((acc, product) => {
    acc[product.brand.name] = (acc[product.brand.name] || 0) + 1;
    return acc;
  }, {});
  const all_brands = Object.keys(brand_counts);

  const manufacturer_counts = products_file.reduce((acc, product) => {
    acc[product.manufacturer] = (acc[product.manufacturer] || 0) + 1;
    return acc;
  }, {});
  const all_manufacturers = Object.keys(manufacturer_counts);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [manufacturers, setManufacturers] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(10000);

  useEffect(() => {
    // Загрузка данных из public/product.json
    fetch("/product.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // Фильтруем продукты по названиям брендов и производителям
        const filteredProducts = data.filter(product =>
          (brands.length === 0 || brands.includes(product.brand.name)) &&
          (manufacturers.length === 0 || manufacturers.includes(product.manufacturer)) &&
          product.price > minPrice &&
          product.price < maxPrice &&
          (params.category === 'none' || params.category === product.category ||
            params.category.includes(product.subCategory))
        );
        setProducts(filteredProducts);
      })
      .catch((error) => {
        console.error("Ошибка при загрузке данных:", error);
      });
  }, [brands, manufacturers, minPrice, maxPrice]); // Добавляем зависимости

  const applyFilters = () => {
    setBrands(selectedBrands);
    setManufacturers(selectedManufacturers);
    setMinPrice(selectedMinPrice);
    setMaxPrice(selectedMaxPrice);
  };

  const resetFilters = () => {
    setBrands([]);
    setManufacturers([]);
    setMinPrice(0);
    setMaxPrice(1000);
    setSelectedBrands([]);
    setSelectedManufacturers([]);
    setMinPrice(0);
    setMaxPrice(1000);
    setFilteredProducts(products);
  };

  return (
    <div>
      <p>{t('example1')}</p>{/*пример использования локализации(нужно будет удалить)*/}
      <h1>Фильтр продуктов</h1>
      <div>
        <h2>Бренды</h2>
        {all_brands.map(brand => (
          <label key={brand}>
            <input
              type="checkbox"
              checked={selectedBrands.includes(brand)}
              onChange={() => {
                if (selectedBrands.includes(brand)) {
                  setSelectedBrands(selectedBrands.filter(b => b !== brand));
                } else {
                  setSelectedBrands([...selectedBrands, brand]);
                }
              }}
            />
            {brand} {brand_counts[brand]}
          </label>
        ))}
      </div>

      <div>
        <h2>Производители</h2>
        {all_manufacturers.map(manufacturer => (
          <label key={manufacturer}>
            <input
              type="checkbox"
              checked={selectedManufacturers.includes(manufacturer)}
              onChange={() => {
                if (selectedManufacturers.includes(manufacturer)) {
                  setSelectedManufacturers(selectedManufacturers.filter(m => m !== manufacturer));
                } else {
                  setSelectedManufacturers([...selectedManufacturers, manufacturer]);
                }
              }}
            />
            {manufacturer} {manufacturer_counts[manufacturer]}
          </label>
        ))}
      </div>

      <div>
        <h2>Ценовой диапазон</h2>
        <label>
          Минимальная цена:
          <input
            type="number"
            value={selectedMinPrice}
            onChange={(e) => setSelectedMinPrice(e.target.value)}
          />
        </label>
        <label>
          Максимальная цена:
          <input
            type="number"
            value={selectedMaxPrice}
            onChange={(e) => setSelectedMaxPrice(e.target.value)}
          />
        </label>
      </div>

      <button onClick={applyFilters}>Применить фильтры</button>
      <button onClick={resetFilters}>Сбросить фильтры</button>
      <CategoriesList lng = {lng}/>  
      <Catalog_list products={products} />
    </div>
  );
};



