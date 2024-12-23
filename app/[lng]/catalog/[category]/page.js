"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "../../../i18n/client";
import { useParams } from "next/navigation";

<<<<<<< HEAD
import Catalog_list from "../../components/Catalog_list";
import products_file from "@/public/product.json";
import { CategoriesList } from "../../components/CategoriesLIst";

import styles from "./Catalog.modules.scss";
=======
import Catalog_list from '../../components/Catalog_list';
import products_file from '@/public/product.json';
import { CategoriesList } from '../../components/CategoriesList';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import Button from '../../components/sub_components/Button/Button';

import styles from "./Cetagory.module.scss"

import catalog_img from "@/public/catalog.png"//временное фото, добавь фото карзины 
>>>>>>> e92e3aee6d645f38eb587e585210001716a06aa7

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
<<<<<<< HEAD
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
=======
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
>>>>>>> e92e3aee6d645f38eb587e585210001716a06aa7
    </div>
  );
}
