"use client"

import { useState } from "react";
import { useTranslation } from '../../../i18n/client'
import Image from "next/image";
import Button from "../sub_components/Button/Button";
import styles from "./ProductCard.module.scss";

import korzina_img from "@/public/ProductDetails/korzina.svg"
import vector_bytilka_img from "@/public/vector-bytilka.png"
import vector_box_img from "@/public/vector-box.png"
import share_img from "@/public/ProductDetails/share.svg"
import download_gray_img from "@/public/download-gray.png"


const ProductCard = ({ product }, { lng }) => {

  const { t } = useTranslation(lng, 'productcard')

  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));
  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);

  const addToCart = () => {
    if (product.amount > 0) {
      alert(`${t('add_cart')} ${quantity} ${t('count')}`);
    }
  };

  const handleShareButtonClick = async () => {
    try {
      const productUrl = `${window.location.origin}/product/${product.id}`;
      await navigator.clipboard.writeText(productUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 5000);
    } catch (error) {
      console.error("Ошибка копирования ссылки:", error);
    }
  };

  const stockText = (product.amount > 0) ? t('availability_1') : t('availability_2');
  return (
    <div className={styles.productCard}>
      <div className={styles.imageSection}>
        <Image
          src={product.image}
          alt={lng == 'ru' ? product.nameRu : product.nameEn}
          width={350}
          height={350}
          className={styles.productImage}
        />
      </div>
      <div className={styles.infoSection}>
        <p
          className={`${styles.inStock} ${product.amount === 0 ? styles.outOfStock : ""
            }`}
        >
          {stockText}
        </p>

        <div className={styles.productHeader}>
          <span className={styles.productBrand}>{product.brand?.name}</span>
          <span className={styles.productTitle}>{lng == 'ru' ? product.nameRu : product.nameEn}</span>
        </div>

        <div className={styles.sizeInfo}>
          {product.sizeType === "volume" ? (

            <Image
              src={vector_bytilka_img}
              className={styles.vectorBytilka}
            />
          ) : (
            <Image
              src={vector_box_img}
              className={styles.vectorBox}
            />
          )}

          <span className={styles.volumeText}>
            {product.sizeType === "box"
              ? `${product.count}x${product.size} г`
              : `${product.size} мл`}
          </span>
        </div>

        <div className={styles.priceAndActionsContainer}>
          <p className={styles.productPrice}>{product.price} ₸</p>

          <div className={styles.quantityContainer}>
            <button className={styles.quantityButton} onClick={decrementQuantity}>
              -
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button className={styles.quantityButton} onClick={incrementQuantity}>
              +
            </button>
          </div>

          <Button
            text={t('in_basket')}
            textColor="white"
            icon={korzina_img}
            icon_style={{ width: "30px", height: "30px" }}
            style={{ width: "260px", height: "60px" }}
            onClick={addToCart}
            disabled={product.amount === 0}
          />
        </div>

        <div className={styles.promotionContainer}>
          <div className={styles.ButtonBox}>
            <button
              className={styles.shareButton}
              onClick={handleShareButtonClick}
            >
              <Image
                src={share_img}
                alt="Share"
                width={20}
                height={20}
              />
            </button>
            {isLinkCopied && (
              <div className={styles.linkCopied}>
                {t('linkcop')}
              </div>
            )}
          </div>

          <div className={styles.promotionBox}>
            <p className={styles.promotionText}>
              {t('prom_1')} <span>10 000 ₸</span> {t('prom_2')}
            </p>
          </div>

          <button className={styles.priceListButton}>
            <a href="/path/to/pricelist.pdf" download>
              {t('pricelist')}
              <Image
                src={download_gray_img}
                alt="Download"
                width={20}
                height={20}
                className={styles.downloadIcon}
              />
            </a>
          </button>
        </div>

        <div className={styles.actions}> 
            <button className={styles.shareButton}>
                <Image src="/kis_project_DANDA/ProductDetails/share.svg" alt="Share" width={20} height={20} />
            </button>
        </div>

        <div className={styles.characteristicsList}>
          <p>
            {t('manufacturer')}:{" "}
            <span className={styles.characteristics}>
              {product.manufacturer}
            </span>
          </p>
          <p>
            {t('brend')}:{" "}
            <span className={styles.characteristics}>{product.brand?.name}</span>
          </p>
          <p>
            {t('article')}:{" "}
            <span className={styles.characteristics}>{product.article}</span>
          </p>
          <p>
            {t('code')}:{" "}
            <span className={styles.characteristics}>{product.barcode}</span>
          </p>
        </div>

        <div className={styles.description}>
          <h2 onClick={toggleDescription} className={styles.descriptionTitle}>
            {t('descript')} {isDescriptionOpen ? "▴" : "▾"}
          </h2>
          {isDescriptionOpen && (

            <p className={styles.descriptionText}>{lng == 'ru' ? product.descriptionRu : product.descriptionEn}</p>
          )}
        </div>
      </div >
    </div >
  );
};

export default ProductCard;