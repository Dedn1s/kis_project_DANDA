"use client"

import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../../i18n/client'
import { useParams } from 'next/navigation';

import Catalog_list from '../../components/Catalog_list';
import products_file from '@/public/product.json';
import { CategoriesList } from '../../components/CategoriesList';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Button from '../../components/sub_components/Button/Button';

import styles from "./Cetagory.module.scss"

import catalog_img from "@/public/catalog.png"//временное фото, добавь фото карзины 

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
      <Header lng={lng}/>
      <div className={styles.all_page}>
        <div className={styles.filters}>
          <h2 className={styles.main_text}>Подбор по параметрам</h2>
          <div>
            <p className={styles.filters_subtext}>Цена</p>
            <div className={styles.filters_price_box}>
              <form className={styles.filters_price}>
                <input
                  type="number"
                  value={selectedMinPrice}
                  onChange={(e) => setSelectedMinPrice(e.target.value)}
                />
              </form>
              <p>-</p>
              <form className={styles.filters_price}>
                <input
                  type="number"
                  value={selectedMaxPrice}
                  onChange={(e) => setSelectedMaxPrice(e.target.value)}
                />
              </form>
            </div>
          </div>
JavaScript




          <div>
            <h2 className={styles.filters_maintext}>Производитель</h2>
            <div className={styles.filters_manufacturers}>
              {all_manufacturers.map(manufacturer => (
                <label key={manufacturer} className={styles.filters_label}>
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
                  <p>{manufacturer} <span className={styles.filters_label_count}>({manufacturer_counts[manufacturer]})</span></p>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h2 h2 className={styles.filters_maintext}>Бренды</h2>
            <div className={styles.filters_brand}>
              {all_brands.map(brand => (
                <label key={brand} className={styles.filters_label}>
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
                  <p>{brand} <span className={styles.filters_label_count}>({brand_counts[brand]})</span></p>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.filters_buttons}>
            <Button
              text="Применить"
              textColor="white"
              action={applyFilters}
              style={{ width: "120px", height: "40px", fontsize: "1em" }}
            />
            <Button
              text=""
              textColor="white"
              action={resetFilters}
              icon={catalog_img}
              style={{ width: "40px", height: "40px" }}
              icon_style={{width: "24px", height: "24px"}}
            />
          </div>

          <CategoriesList lng={lng} />
        </div>
        <Catalog_list products={products} />
      </div>
      <Footer lng={lng}/>
    </div>
  );
};