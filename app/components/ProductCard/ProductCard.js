import { useState } from "react";
import Image from "next/image";
import Button from "../sub_components/Button/Button";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isLinkCopied, setLinkCopied] = useState(false);

  const incrementQuantity = () => {
    if (product.amount > 0 && quantity < product.amount) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));
  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);

  const addToCart = () => {
    if (product.amount > 0) {
      alert(`Добавлено в корзину: ${quantity} шт.`);
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

  const stockText = product.amount > 0 ? "В наличии" : "Нет в наличии";

  return (
    <div className={styles.productCard}>
      <div className={styles.imageSection}>
        <Image
          src={product.image}
          alt={product.nameRu}
          width={350}
          height={350}
          className={styles.productImage}
        />
      </div>

      <div className={styles.infoSection}>
        <p
          className={`${styles.inStock} ${
            product.amount === 0 ? styles.outOfStock : ""
          }`}
        >
          {stockText}
        </p>

        <div className={styles.productHeader}>
          <span className={styles.productBrand}>{product.brand?.name}</span>
          <span className={styles.productTitle}>{product.nameRu}</span>
        </div>

        <div className={styles.sizeInfo}>
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
            {product.sizeType === "box"
              ? `${product.count}x${product.size} г`
              : `${product.size} мл`}
          </span>
        </div>

        <div className={styles.priceAndActionsContainer}>
          <p className={styles.productPrice}>{product.price} ₸</p>

          <div className={styles.quantityContainer}>
            <button
              className={styles.quantityButton}
              onClick={decrementQuantity}
              disabled={product.amount === 0}
            >
              -
            </button>
            <span className={styles.quantity}>{quantity}</span>
            <button
              className={styles.quantityButton}
              onClick={incrementQuantity}
              disabled={product.amount === 0 || quantity >= product.amount}
            >
              +
            </button>
          </div>

          <Button
            text="В корзину"
            textColor="white"
            icon="/ProductDetails/korzina.svg"
            style={{ width: "180px", height: "60px", marginLeft: "40px" }}
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
                src="/ProductDetails/share.svg"
                alt="Share"
                width={20}
                height={20}
              />
            </button>
            {isLinkCopied && (
              <div className={styles.linkCopied}>
                Ссылка скопирована!
              </div>
            )}
          </div>

          <div className={styles.promotionBox}>
            <p className={styles.promotionText}>
              При покупке от <span>10 000 ₸</span> бесплатная доставка по
              Кокчетаву и области
            </p>
          </div>

          <button className={styles.priceListButton}>
            <a href="/path/to/pricelist.pdf" download>
              Прайс-лист
              <Image
                src="/download-gray.png"
                alt="Download"
                width={20}
                height={20}
                className={styles.downloadIcon}
              />
            </a>
          </button>
        </div>

        <div className={styles.characteristicsList}>
          <p>
            Производитель:{" "}
            <span className={styles.characteristics}>
              {product.manufacturer}
            </span>
          </p>
          <p>
            Бренд:{" "}
            <span className={styles.characteristics}>{product.brand?.name}</span>
          </p>
          <p>
            Артикул:{" "}
            <span className={styles.characteristics}>{product.article}</span>
          </p>
          <p>
            Штрихкод:{" "}
            <span className={styles.characteristics}>{product.barcode}</span>
          </p>
        </div>

        <div className={styles.description}>
          <h2 onClick={toggleDescription} className={styles.descriptionTitle}>
            Описание {isDescriptionOpen ? "▴" : "▾"}
          </h2>
          {isDescriptionOpen && (
            <p className={styles.descriptionText}>{product.descriptionRu}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
