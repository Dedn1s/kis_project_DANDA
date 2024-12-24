import styles from './Catalog_list.module.scss';
import Button from "../sub_components/Button/Button";
import Image from "next/image";
import Link from 'next/link';
import vectorBytilkaImg from '@/public/vector-bytilka.png';
import vectorBoxImg from '@/public/vector-box.png';

import { addToBasket } from '../functions/basket_functions';

export default function ProductList({ products }) {
  return (
    <div className={styles.saleItemsContainer}>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.image} alt="Товар" className={styles.image} />

            {product.sizeType === "volume" ? (
              <Image
                src={vectorBytilkaImg}
                className={styles.vectorBytilka}
                alt="Иконка бутылки"
              />
            ) : (
              <Image
                src={vectorBoxImg}
                className={styles.vectorBox}
                alt="Иконка коробки"
              />
            )}

            <span className={styles.volumeText}>
              {product.sizeType === "box"
                ? `${product.count}x${product.size} г`
                : `${product.size} мл`}
            </span>

            <Link href={`/product-card/${product.id - 1}`} className={styles.productDescription}>
              <span className={styles.bold}>
                {product.brand.name} {product.name}
              </span>
            </Link>

            <div className={styles.barcode}>
              <span className={styles.barcodeLabel}>Штрихкод:</span>
              <span className={styles.barcodeNumber}>{product.barcode}</span>
            </div>

            <div className={styles.producer}>
              <span className={styles.barcodeLabel}>Производитель:</span>
              <span className={styles.producerName}>{product.manufacturer}</span>
            </div>

            <div className={styles.brand}>
              <span className={styles.barcodeLabel}>Бренд:</span>
              <span className={styles.brandName}>{product.brand.name}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <div className={styles.price}>{product.price} ₸</div>
              <Button
                text={"В корзину"}
                textColor="white"
                action={() => {addToBasket(product)}}
                style={{ width: "200px", height: "44px", marginLeft: "160px", marginTop: "184px", marginRight: "20px" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
