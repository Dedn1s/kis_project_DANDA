"use client"

import React, { useEffect, useState } from 'react';

import styles from "./Basket.module.scss";

import Image from "next/image";
import Button from "../sub_components/Button/Button";
import { increaseQuantity, removeFromBasket, decreaseQuantity, finalPrise } from '../functions/basket_functions';

export default function Basket() {

  const ids = localStorage.getItem('basket');

  if (!ids) {
    localStorage.setItem('basket', JSON.stringify([]))
  }
  const ids_1 = JSON.parse(localStorage.getItem('basket'));

  const [products, setProducts] = useState(ids_1);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.titleUnderline}></div>
      {ids_1.length === 0 ? (
        <p className={styles.emptyMessage}>Ваша корзина пуста.</p>
      ) : (
        products.map((prod, index) => {
          const currentQuantity = prod[1];

          return (
            <div key={index} className={styles.productCard}>
              <img
                src={prod[0].image}
                alt={prod[0].shortNameRu}
                className={styles.productImage}
              />
              <div className={styles.productInfo}>
                <p className={styles.productName}>{prod[0].shortNameRu}</p>
                <p className={styles.productNameLong}>{prod[0].nameRu}</p>
                <p className={styles.productDescription}>
                  {prod[0].descriptionRu}
                </p>
              </div>

              <div className={styles.quantityContainer}>
                <button
                  className={styles.quantityButton}
                  onClick={() => { decreaseQuantity(prod[0].id); setProducts(JSON.parse(localStorage.getItem('basket'))) }}
                  disabled={currentQuantity === 1}
                >
                  -
                </button>
                <span className={styles.quantity}>{currentQuantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => { increaseQuantity(prod[0].id); setProducts(JSON.parse(localStorage.getItem('basket'))) }}
                >
                  +
                </button>
              </div>

              <div className={styles.productInfo}>
                <p className={styles.price}>{prod[0].price * prod[1]} ₸</p>
              </div>

              <button
                onClick={() => { removeFromBasket(prod[0].id); setProducts(JSON.parse(localStorage.getItem('basket'))) }}
              >
                delete
              </button>
            </div>
          );
        })
      )}

      {/* Кнопка для оформления заказа */}
      {ids_1.length > 0 && (
        <div>
          <Button
            text="Оформить заказ"
            textColor="white"
            style={{
              width: "260px",
              height: "60px",
              marginTop: "20px",
            }}
            action={() => { alert("Переход к оформлению заказа") }}
          />
          <div className={styles.productInfo}>
            <p className={styles.price}>Итого: {finalPrise()} ₸</p>
          </div>
        </div>
      )}
    </div>
  );
}