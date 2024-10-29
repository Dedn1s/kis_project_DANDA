'use client';

import styles from "./Banner.module.css";

export default function Banner() {
    return (
      <div className={styles.banner__limit}>
        <div className={styles.banner}>
          <div className={styles.banner__content}>
          <h1>
              Бытовая химия,<br />
              косметика<br />
              и хозтовары
          </h1>
          <h2 className={styles.banner__subtitle}>оптом по кокчетаву и области</h2>
            <button className={styles.banner__content__button} onClick={() => alert('У программиста лапки, она не успела сделать эту кнопку')}>
              В каталог
            </button>
            <div className={styles.banner__details}>
              <div>
              <p>
              <span className={styles.plusCircle}>+</span> Только самые <br />
                  выгодные предложения
                </p>
              </div>
              <div>
              <p>
                  <span className={styles.plusCircle}>+</span> Бесплатная доставка <br />
                  по Кокчетаву от 10 тыс ₸
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}