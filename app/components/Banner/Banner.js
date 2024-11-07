'use client';

import { Plus } from "lucide-react";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <>
      <div className={styles.banner__limit}>
        <div className={styles.banner}></div>
        <div className='container'>
          <div className={styles.banner__col}>
            <h1 className={styles.content__title}>
              Бытовая химия,
              косметика
              и хозтовары
            </h1>
            <h2 className={styles.content__subtitle}>оптом по кокчетаву и области</h2>
            <button className={styles.banner__content__button} onClick={() => alert('У программиста лапки, она не успела сделать эту кнопку')}>
              В каталог
            </button>
            <div className={styles.banner__details}>
              <div className={styles.detail__item}>
                <Plus className={styles.icon__plus} color="white" size={16} />
                <p>
                  Только самые
                  выгодные предложения
                </p>
              </div>
              <div>
                <div className={styles.detail__item}>
                  <Plus className={styles.icon__plus} color="white" size={16} />
                  <p>
                    Бесплатная доставка
                    по Кокчетаву от 10 тыс ₸
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner__details_mob}>
        <div className={styles.detail__item}>
          <Plus className={styles.icon__plus} color="white" size={16} />
          <p>
            Только самые
            выгодные предложения
          </p>
        </div>
        <div>
          <div className={styles.detail__item}>
            <Plus className={styles.icon__plus} color="white" size={16} />
            <p>
              Бесплатная доставка
              по Кокчетаву от 10 тыс ₸
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 