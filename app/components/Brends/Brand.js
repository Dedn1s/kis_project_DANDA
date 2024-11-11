import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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

  return (
    <>
      <div className={styles.sliderContainer}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            <span>лучшие</span> <span className={styles.products}>товары</span>
          </h1>
          <h2 className={styles.subtitle}>От ведущих мировых брэндов</h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={10}
          pagination={{
            el: "#containerForBullets",
            type: "bullets",
            bulletClass: "swiper-custom-bullet",
            bulletActiveClass: "swiper-custom-bullet-active",
            clickable: true
          }}
          autoplay={{ delay: 10000 }}
          loop={true}
          className={styles.swiper__custom}
          breakpoints={{
            0: { slidesPerView: 3 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 10 },
          }}
        >
          {brandImages.map((img, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.slideContent}>
                <Image src={img} alt={`Brand ${index}`} width={102} height={77} />
              </div>
            </SwiperSlide>
          ))}
          <div id="containerForBullets" className={styles.swiper__pagination}></div>
        </Swiper>
      </div>
    </>
  );
}