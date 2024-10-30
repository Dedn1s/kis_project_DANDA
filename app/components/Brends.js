"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./BrandSlider.module.css";

export default function BrandSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const brandImages = [
    "/airwick.png", "/masterfresh.png", "/brand2.png",
    "/brand3.png", "/brand5.png", "/brand6.png",
    "/brand7.png", "/brand8.avif", "/listik.png",
    "/image3.png", "/images/brand11.jpg", "/images/brand12.jpg",
    "/images/brand13.jpg", "/images/brand14.jpg", "/images/brand15.jpg",
    "/images/brand16.jpg", "/images/brand17.jpg", "/images/brand18.jpg",
    "/images/brand19.jpg", "/images/brand20.jpg", "/images/brand21.jpg",
    "/images/brand22.jpg", "/images/brand23.jpg", "/images/brand24.jpg",
    "/images/brand25.jpg", "/images/brand26.jpg", "/images/brand27.jpg",
    "/images/brand28.jpg", "/images/brand29.jpg", "/images/brand30.jpg",
  ];

  const groupedImages = [];
  for (let i = 0; i < brandImages.length; i += 10) {
    groupedImages.push(brandImages.slice(i, i + 10));
  }

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>лучшие</span> <span className={styles.products}>товары</span>
        </h1>
        <h2 className={styles.subtitle}>От ведущих мировых брэндов</h2>
      </div>
      <div
        className={styles.slidesWrapper}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {groupedImages.map((group, index) => (
          <div className={styles.slide} key={index}>
            {group.map((image, i) => (
              <div key={i} className={styles.imageContainer}>
                <Image src={image} alt={`Brand ${i}`} width={102} height={77} />
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {Array(3).fill().map((_, index) => (
          <span
            key={index}
            onClick={() => handleDotClick(index)}
            className={`${styles.dot} ${index === currentSlide ? styles.activeDot : ""}`}
          ></span>
        ))}
      </div>
    </div>
  );
}
