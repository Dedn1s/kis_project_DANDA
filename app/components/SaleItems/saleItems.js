"use client";

import styles from './saleItems.module.css'; 
import Button from "../sub_components/Button/Button";

const products = [
    { id: 1, description: "AOS Ср-во для мытья посуды Апельсин+мята", barcode: "4604049097548", brand: "AOS", volume: "450 мл", image: "/sorti.png" },
    { id: 2, description: "AOS Ср-во для мытья посуды Crystal", barcode: "4604049097549", brand: "AOS", volume: "450 мл", image: "/aos.png" },
    { id: 3, description: "ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник", barcode: "4604049097550", brand: "ARIEL", volume: "15X28.8 г", image: "/ariel.png" },
    { id: 4, description: "BIMAX Порошок стиральный Автомат 100 пятен COMPACT", barcode: "4604049097551", brand: "BIMAX", volume: "15X28.8 г", image: "/bimax.png" },
    { id: 5, description: "AOS Ср-во для мытья посуды Лимон", barcode: "4604049097552", brand: "AOS", volume: "450 мл", image: "/sorti.png" },
    { id: 6, description: "AOS Ср-во для мытья посуды Crystal", barcode: "4604049097553", brand: "AOS", volume: "450 мл", image: "/aos.png" },
    { id: 7, description: "ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник", barcode: "4604049097554", brand: "ARIEL", volume: "15X28.8 г", image: "/ariel.png" },
    { id: 8, description: "BIMAX Порошок стиральный Автомат 100 пятен COMPACT", barcode: "4604049097555", brand: "BIMAX", volume: "15X28.8 г", image: "/bimax.png" },
];

export default function SaleItems() {
    return (
        <div className={styles.saleItemsContainer}>
            <h2 className={styles.title}>
                <span className={styles.highlight}>Акционные</span> товары
            </h2>
            <div className={styles.grid}>
                {products.map((product) => (
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

                        <span className={styles.volumeText}>
                            {product.brand === "ARIEL" ? "15X28.8 г" : product.volume}
                        </span>

                        <div className={styles.productDescription}>
                            <span className={styles.bold}>{product.brand}</span> {product.description.replace(product.brand, "")}
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
                            <span className={styles.brandName}>AOS</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <div className={styles.price}>48,76 ₸</div>
                            <Button 
                                text="В корзину" 
                                style={{ marginLeft: '180px', marginTop: '186px' }} 
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}