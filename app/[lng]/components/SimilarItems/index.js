"use client";

import styles from './similarItems.module.scss';
import Button from "../sub_components/Button/Button";
import { useTranslation } from '@/app/i18n/client';

const similarProducts = [
  { id: 1, description: "AOS Ср-во для мытья посуды Апельсин", barcode: "4604049097548", brand: "AOS", volume: "450 мл", image: "/sorti.png" },
  { id: 2, description: "AOS Ср-во для мытья посуды Лимон", barcode: "4604049097552", brand: "AOS", volume: "450 мл", image: "/aos.png" },
  { id: 3, description: "ARIEL Автмат гель СМС капсулы", barcode: "4604049097550", brand: "ARIEL", volume: "15X28.8 г", image: "/ariel.png" },
  { id: 4, description: "BIMAX Порошок стиральный", barcode: "4604049097551", brand: "BIMAX", volume: "1500 г", image: "/bimax.png" },
];

function similarityScore(a, b) {
  const wordsA = a.toLowerCase().split(/\s+/);
  const wordsB = b.toLowerCase().split(/\s+/);
  let commonWords = 0;
  for (const wordA of wordsA) {
    if (wordsB.includes(wordA)) {
      commonWords++;
    }
  }
  return commonWords / Math.max(wordsA.length, wordsB.length);
}


export const  SimilarItems = ({lng}) => {
  const { t } = useTranslation(lng)

  const targetProduct = similarProducts[0]; 

  const similarItems = similarProducts.slice(1).map((product) => ({
    ...product,
    similarity: similarityScore(targetProduct.description, product.description) + similarityScore(targetProduct.brand, product.brand) / 2,
  }));


  similarItems.sort((a, b) => b.similarity - a.similarity);

  return (
    <div className={styles.similarItemsContainer}>
      <h2 className={styles.title}>
        <span className={styles.highlight}>Похожие</span> товары
      </h2>
      <div className={styles.grid}>
        {similarItems.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.popularTag}>
              <span className={styles.popularText}>Популярное</span>
            </div>
            <img src={product.image} alt="Товар" className={styles.image} />

            {product.brand === "AOS" ? (
              <img
                src="/vector-bytilka.png"
                alt="AOS"
                className={styles.vectorBytilka}
              />
            ) : (
              <img
                src="/vector-box.png"
                alt={product.brand}
                className={styles.vectorBox}
              />
            )}

            <span className={styles.volumeText}>{product.volume}</span>

            <div className={styles.productDescription}>
              <span className={styles.bold}>{product.brand}</span>{" "}
              {product.description.replace(product.brand, "")}
            </div>

            <div className={styles.barcode}>
              <span className={styles.barcodeLabel}>Штрихкод:</span>
              <span className={styles.barcodeNumber}>{product.barcode}</span>
            </div>

            <div className={styles.producer}>
              <span className={styles.barcodeLabel}>Производитель:</span>
              <span className={styles.producerName}>Нэфис</span>
            </div>

            <div className={styles.brand}>
              <span className={styles.barcodeLabel}>Бренд:</span>
              <span className={styles.space}></span>
              <span className={styles.brandName}>{product.brand}</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
              <div className={styles.price}>48,76</div>
              <Button text="В корзину" style={{ marginLeft: "180px", marginTop: "186px" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}