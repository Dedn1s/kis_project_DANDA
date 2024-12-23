"use client";

import React, { useState } from "react";
import Button from "../sub_components/Button/Button";  
import styles from "./Basket.module.css";

export default function Basket({ params: { lng } }) {
  const ids_1 = JSON.parse(localStorage.getItem("basket")) || [];

  const [quantities, setQuantities] = useState(
    ids_1.map((prod) => ({ id: prod[0].id, quantity: 1 }))
  );

  const incrementQuantity = (id) => {
    setQuantities((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setQuantities((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleCheckout = () => {
    alert("Переход к оформлению заказа");
    // логика для перехода на страницу оформления заказа
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.titleUnderline}></div>
      {ids_1.length === 0 ? (
        <p className={styles.emptyMessage}>Ваша корзина пуста.</p>
      ) : (
        ids_1.map((prod, index) => {
          const currentQuantity = quantities[index]?.quantity;

          return (
            <div key={index} className={styles.productCard}>
              <img
                src={prod[0].imageUrl}
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
                  onClick={() => decrementQuantity(prod[0].id)}
                  disabled={currentQuantity === 1}
                >
                  -
                </button>
                <span className={styles.quantity}>{currentQuantity}</span>
                <button
                  className={styles.quantityButton}
                  onClick={() => incrementQuantity(prod[0].id)}
                >
                  +
                </button>
              </div>

              <div className={styles.productInfo}>
                <p className={styles.price}>{prod[0].price} ₸</p>
              </div>
            </div>
          );
        })
      )}
      
      {/* Кнопка для оформления заказа */}
      {ids_1.length > 0 && (
        <Button
          text="Оформить заказ"
          textColor="white"
          style={{
            width: "260px",
            height: "60px",
            marginTop: "20px",
          }}
          onClick={handleCheckout}
        />
      )}
    </div>
  );
}
