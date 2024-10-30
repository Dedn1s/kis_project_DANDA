"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./BrandSlider.module.css";

const brandImages = [
  "/listik.png",
  "/master-frash.jpg",
  "/Air-Wick.jpg",
  "/brand1.webp",
  "/brand2.png",
  "/brand3.png",
  "/brand4.png",
  "/brand5.png",
  "/brand6.png",
  "/brand7.png",
  "/brand8.avif",
  "/brand9.png",
  // Добавьте пути к другим изображениям брендов
];

export default function BrandSlider() {
  const [currentSet, setCurrentSet] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSet(index);
  };

  const displayedBrands = brandImages.slice(currentSet * 10, currentSet * 10 + 10);
  const totalSets = Math.ceil(brandImages.length / 10);

  return (
    <section className={styles.sliderSection}>
      <div className='container'>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>
            <span className={styles.yellow}>лучшие</span> <span className={styles.black}>товары</span>
          </h2>
          <p className={styles.mainText}>От ведущих мировых брэндов</p>
        </div>
        <div className={styles.brandContainer}>
          {displayedBrands.map((src, index) => (
            <Image key={index} src={src} alt={`Brand ${index}`} width={100} height={100} />
          ))}
        </div>
        <div className={styles.dotsContainer}>
          {Array.from({ length: totalSets }).map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${index === currentSet ? styles.activeDot : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
