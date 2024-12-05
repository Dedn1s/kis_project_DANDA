"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; 

import { useTranslation } from '../../../i18n/client'

import styles from "./BrandSlider.module.scss";

SwiperCore.use([Pagination, Autoplay]);

export const BrandSlider = ({ lng }) => {

  const { t } = useTranslation(lng, 'brandslider')

  const brandCount = 11;
  const brands = Array.from({ length: brandCount }, (_, index) => index + 1);

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span>{t('title_1')}</span> <span className={styles.products}>{t('title_2')}</span>
          </h1>
          <h2 className={styles.subtitle}>{t('title_3')}</h2>
        </div>

        <Swiper
          spaceBetween={2}
          slidesPerView={10}
          loop={true}
          autoplay={{
            delay: 7000, 
            disableOnInteraction: false,  
          }}
          pagination={{
            el: "#containerForBullets",
            type: "bullets",
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "swiper-custom-bullet-active",
            clickable: true
          }}
          className={styles.swiper__custom}
          breakpoints={{
            0: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 10 },
          }}
          speed={500}
        >
          {brands.map((num, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.slideContent}>
                <img
                  src={`/kis_project_DANDA/brands/brand-${num}.png`}  
                  alt={`Brand ${num}`} 
                  style={{ maxHeight: '100%', maxWidth: 'auto' }}
                />
              </div>
            </SwiperSlide>
          ))}
          <div id="containerForBullets" className={styles.swiper__pagination}></div>
        </Swiper>
      </div>
    </>
  );
}
