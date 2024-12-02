"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Button from "../sub_components/Button/Button";
import { sliderData } from "../Carousel/Constants"; 
import styles from "./Carousel.module.css";
import Image from "next/image";
import { useTranslation } from '../../../i18n/client';

export const Carousel = ({ lng }) => {
  const { t } = useTranslation(lng, 'carousel');

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={styles.slideContent}>
              <Image
                src={slide.imageSrc}
                className={styles.slideImage}
                alt={t(slide.title)}
              />
              <div>
                <p className={styles.slideDuration}>{t(slide.duration)}</p>
                <h2 className={styles.slideTitle}>{t(slide.title)}</h2>
                <p className={styles.slideDescription}>{t(slide.description)}</p>
                <Button
                  text={t(slide.buttonText)}
                  textColor="white"
                  href={slide.link}
                  onClick={() => alert("Кнопка в разработке")}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};