"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "../../../i18n/client";
import { useParams } from "next/navigation";

import Catalog_list from "../../components/Catalog_list";
import products_file from "@/public/product.json";
import { CategoriesList } from "../../components/CategoriesLIst";

import styles from "./Catalog.modules.scss";

export default function Catalog({ params: { lng } }) {
  const { t } = useTranslation(lng, "catalog");
  const params = useParams();

  // Собираем все бренды и производителей
  const brand_counts = products_file.reduce((acc, product) => {
    acc[product.brand.name] = (acc[product.brand.name] || 0) + 1;
    return acc;
  }, {});

  const manufacturer_counts = products_file.reduce((acc, product) => {
    acc[product.manufacturer] = (acc[product.manufacturer] || 0) + 1;
    return acc;
  }, {});

  const all_brands = Object.keys(brand_counts);
  const all_manufacturers = Object.keys(manufacturer_counts);

  // Состояния для продуктов и фильтров
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedManufacturers, setSelectedManufacturers] = useState([]);
  const [selectedMinPrice, setSelectedMinPrice] = useState(0);
  const [selectedMaxPrice, setSelectedMaxPrice] = useState(10000);

  // Загрузка продуктов
  useEffect(() => {
    setProducts(products_file);
    setFilteredProducts(products_file);
  }, []);

  // Применение фильтров
  useEffect(() => {
    const filtered = products_file.filter((product) => {
      const isBrandMatch =
        selectedBrands.length === 0 || selectedBrands.includes(product.brand.name);
      const isManufacturerMatch =
        selectedManufacturers.length === 0 || selectedManufacturers.includes(product.manufacturer);
      const isPriceMatch =
        product.price >= selectedMinPrice && product.price <= selectedMaxPrice;
      const isCategoryMatch =
        params.category === "none" ||
        params.category === product.category ||
        params.category.includes(product.subCategory);

      return isBrandMatch && isManufacturerMatch && isPriceMatch && isCategoryMatch;
    });

    setFilteredProducts(filtered);
  }, [selectedBrands, selectedManufacturers, selectedMinPrice, selectedMaxPrice, params.category]);

  // Сброс фильтров
  const resetFilters = () => {
    setSelectedBrands([]);
    setSelectedManufacturers([]);
    setSelectedMinPrice(0);
    setSelectedMaxPrice(10000);
  };

  return (
    <div className={styles.catalogContainer}>
      <div className={styles.filters}>
        <h1 className={styles.filterTitle}>{t("ПОДБОР ПО ПАРАМЕТРАМ")}</h1>

        {/* Секция фильтрации по цене */}
        <div className={styles.priceSection}>
          <h2 className={styles.priceTitle}>{t("Цена")}</h2>
          <div className={styles.priceFilter}>
            <input
              type="number"
              className={styles.priceInput}
              placeholder="Мин."
              value={selectedMinPrice}
              onChange={(e) => setSelectedMinPrice(Number(e.target.value))}
            />
            <input
              type="number"
              className={styles.priceInput}
              placeholder="Макс."
              value={selectedMaxPrice}
              onChange={(e) => setSelectedMaxPrice(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Кнопки управления фильтрами */}
        <div className={styles.filterButtons}>
          <button className={styles.applyButton} onClick={() => {}}>
            {t("Применить")}
          </button>
          <button className={styles.resetButton} onClick={resetFilters}>
            {t("Сбросить")}
          </button>
        </div>
      </div>

      {/* Контентная часть */}
      <div className={styles.content}>
        <CategoriesList lng={lng} />
        <Catalog_list products={filteredProducts} />
      </div>
    </div>
  );
}
