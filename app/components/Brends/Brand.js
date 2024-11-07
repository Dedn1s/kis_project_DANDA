"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./BrandSlider.module.scss";

export default function BrandSlider() {
  const brandImages = [
    "/airwick.png", "/masterfresh.png", "/brand2.png",
    "/brand3.png", "/brand5.png", "/brand6.png",
    "/brand7.png", "/brand8.avif", "/listik.png",
    "/image3.png", "/airwick.png", "/masterfresh.png",
    "/brand2.png", "/brand3.png", "/brand5.png",
    "/brand6.png", "/brand7.png", "/brand8.avif",
    "/listik.png", "/image3.png", "/airwick.png",
    "/masterfresh.png", "/brand2.png", "/brand3.png",
    "/brand5.png", "/brand6.png", "/brand7.png",
    "/brand8.avif", "/listik.png", "/image3.png",
  ];

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const itemsPerSlide = isMobile ? 3 : 10;
  const groupedImages = [];
  
  for (let i = 0; i < brandImages.length; i += itemsPerSlide) {
    groupedImages.push(brandImages.slice(i, i + itemsPerSlide));
  }

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          <span>лучшие</span> <span className={styles.products}>товары</span>
        </h1>
        <h2 className={styles.subtitle}>От ведущих мировых брэндов</h2>
      </div>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 10000 }}
        loop={true}
        className={styles.swiper}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 1 }, 
          1024: { slidesPerView: 1 }, 
        }}
      >
        {groupedImages.map((group, index) => (
          <SwiperSlide key={index} className={styles.slide}>
            <div className={styles.slideContent}>
              {group.map((image, i) => (
                <div key={i} className={styles.imageContainer}>
                  <Image src={image} alt={`Brand ${i}`} width={102} height={77} />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}