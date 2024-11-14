import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Button from "../sub_components/Button/Button";
import {promotionSlide, partnerSlide} from "../Carousel/Constants.js";
import styles from "../Carousel/Carousel.css";

const sliderData = [promotionSlide, partnerSlide];

export default function PromotionSwiper() {
  return (
    <section className={styles.container}>
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
              <img
                src={slide.imageSrc}
                alt={slide.title}
                className={styles.slideImage}
              />
              <div>
                <p className={styles.slideDuration}>{slide.duration}</p>
                <h2 className={styles.slideTitle}>{slide.title}</h2>
                <p className={styles.slideDescription}>{slide.description}</p>
                <Button
                  label={slide.buttonText}
                  size="lg"
                  href={slide.link}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}