"use client";

import styles from './saleItems.module.scss'; 
import Button from "../sub_components/Button/Button";
import products from '/products.json'; 

export default function SaleItems() {
    return (
        <div className={styles.saleItemsContainer}>
            <h2 className={styles.title}>
                <span className={styles.highlight}>Акционные</span> товары
            </h2>
            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        {product.isPopular && (
                            <div className={styles.popularTag}>
                                <span className={styles.popularText}>Популярное</span>
                            </div>
                        )}
                        <img src={product.image} alt="Товар" className={styles.image} />

                        {product.sizeType === "volume" ? (
                            <img 
                                src="/vector-bytilka.png" 
                                alt="Volume icon" 
                                className={styles.vectorBytilka}
                            />
                        ) : (
                            <img 
                                src="/vector-box.png" 
                                alt="Box icon" 
                                className={styles.vectorBox}
                            />
                        )}

                        <span className={styles.volumeText}>
                            {product.sizeType === "box" ? `${product.count}x${product.size} г` : `${product.size} мл`}
                        </span>

                        <div className={styles.productDescription}>
                            <span className={styles.bold}>{product.brand.name}</span> {product.nameRu.replace(product.brand.name, "")}
                        </div>

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
                            <span className={styles.space}></span>
                            <span className={styles.brandName}>{product.brand.name}</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <div className={styles.price}>{product.price} ₸</div>
                            <Button 
                                text="В корзину" 
                                style={{ marginLeft: '180px', marginTop: '190px' }} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
