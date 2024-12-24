"use client"

import styles from './saleItems.module.scss'; 
import Button from "../sub_components/Button/Button";
import products from '/products.json'; 
import { useTranslation } from '../../../i18n/client'
import { addToBasket } from '../functions/basket_functions';
import Image from "next/image";
import Link from 'next/link'

import vector_bytilka_img from '@/public/vector-bytilka.png'
import vector_box_img from '@/public/vector-box.png'


export const SaleItems =  ({ lng }) => {
  const { t } = useTranslation(lng, 'saleitems')
    return (
        <div className={styles.saleItemsContainer}>
            <h2 className={styles.title}>
                <span className={styles.highlight}>{t('highlight_1')}</span> {t('highlight_2')}
            </h2>
            <div className={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} className={styles.card}>
                        {product.isPopular && (
                            <div className={styles.popularTag}>
                                <span className={styles.popularText}>{t('popular')}</span>
                            </div>
                        )}
                        <img src={product.image} alt="Товар" className={styles.image} />

                        {product.sizeType === "volume" ? (
                            <Image 
                                src = {vector_bytilka_img}
                                className={styles.vectorBytilka}>
                            </Image>
                        ) : (
                            <Image 
                                src = {vector_box_img}
                                className={styles.vectorBox}>
                            </Image>
                        )}

                        <span className={styles.volumeText}>
                            {product.sizeType === "box" ? `${product.count}x${product.size} ${t('g')}` : `${product.size} ${t('ml')}`}
                        </span>

                        <Link href={`/${lng}/product-card/${product.id - 1}`} className={styles.productDescription}>
                            <span className={styles.bold}>{product.brand.name} {lng == "ru" ? product.nameRu.replace(product.brand.name, ""): product.nameEn.replace(product.brand.name, "")}</span>
                        </Link>

                        <div className={styles.barcode}>
                            <span className={styles.barcodeLabel}>{t('code')}:</span>
                            <span className={styles.barcodeNumber}>{product.barcode}</span>
                        </div>

                        <div className={styles.producer}>
                            <span className={styles.barcodeLabel}>{t('producer')}:</span>
                            <span className={styles.producerName}>{product.manufacturer}</span>
                        </div>

                        <div className={styles.brand}>
                            <span className={styles.barcodeLabel}>{t('brend')}:</span>
                            <span className={styles.space}></span>
                            <span className={styles.brandName}>{product.brand.name}</span>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                            <div className={styles.price}>{product.price} ₸</div>
                            <Button
                                text= {t('in_bascket')}
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
