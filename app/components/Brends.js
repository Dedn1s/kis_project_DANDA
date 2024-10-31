"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./BrandSlider.module.css";


export default function BrandSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const brandImages = [
    "/airwick.png", "/masterfresh.png", "/brand2.png",
    "/brand3.png", "/brand5.png", "/brand6.png",
    "/brand7.png", "/brand8.avif", "/listik.png",
    "/image3.png", "/airwick.png", "/airwick.png",
    "/airwick.png", "/airwick.png", "/airwick.png",
    "/airwick.png", "/airwick.png", "/airwick.png",
    "/airwick.png", "/airwick.png", "/airwick.png",
    "/airwick.png", "/airwick.png", "/airwick.png",
    "/airwick.png", "/airwick.png", "/airwick.png",
    "/airwick.png", "/airwick.png", "/airwick.png",
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const groupedImages = [];
  const imagesToDisplay = isMobile ? brandImages.slice(0, 10) : brandImages;

  for (let i = 0; i < imagesToDisplay.length; i += 10) {
    groupedImages.push(imagesToDisplay.slice(i, i + 10));
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
