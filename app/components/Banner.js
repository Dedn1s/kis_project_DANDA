'use client';

import styles from "./../page.module.css";

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
            <h2>оптом по кокчетаву и области</h2>
            <button className={styles.banner__content__button} onClick={() => alert('Страница в разработке')}>
              В каталог
            </button>
            <div className={styles.banner__details}>
              <div>
                <span>+</span>
                <p>Только самые выгодные предложения</p>
              </div>
              <div>
                <span>+</span>
                <p>Бесплатная доставка по Кокчетаву от 10 тыс ₸</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
