import { useState } from "react";
import Image from "next/image";
import Button from "../sub_components/Button/Button";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => setQuantity(Math.max(1, quantity - 1));
  const toggleDescription = () => setDescriptionOpen(!isDescriptionOpen);

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
        <p className={styles.inStock}>В наличии</p>
        <h2 className={styles.productTitle}>{product.nameRu}</h2>
        <p className={styles.productVolume}>{product.size} {product.sizeType}</p>

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
            text="В корзину"
            textColor="white"
            icon="/ProductDetails/korzina.svg"
            style={{ width: "180px", height: "59px", marginLeft: "40px" }}
            onClick={() => alert("Добавлено в корзину")}
          />
        </div>

        <Button
          text="В корзину"
          icon="/kis_project_DANDA/ProductDetails/korzina.svg"
          onClick={() => alert("Добавлено в корзину")}
        /> <div className={styles.promotionContainer}>
          <button className={styles.shareButton}>
            <Image src="/ProductDetails/share.svg" alt="Share" width={20} height={20} />
          </button>

          <div className={styles.promotionBox}>
            <p className={styles.promotionText}>
              При покупке от <span>10 000 ₸</span> бесплатная доставка по Кокчетаву и области
            </p>
          </div>

          <button className={styles.priceListButton}>
            <a href="/path/to/pricelist.pdf" download>
              Прайс-лист <Image src="/kis_project_DANDA/ProductDetails/download.svg" alt="Download" width={11} height={12} />
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
            Производитель: <span className={styles.characteristics}>{product.manufacturer}</span>
          </p>
          <p>
            Бренд: <span className={styles.characteristics}>{product.brand?.name}</span>
          </p>
          <p>
            Артикул: <span className={styles.characteristics}>{product.article}</span>
          </p>
          <p>
            Штрихкод: <span className={styles.characteristics}>{product.barcode}</span>
          </p>
        </div>

        <div className={styles.description}>
          <h2 onClick={toggleDescription} className={styles.descriptionTitle}>
            Описание {isDescriptionOpen ? "▴" : "▾"}
          </h2>
          {isDescriptionOpen && (
            <p className={styles.descriptionText}>
              {product.descriptionRu}
            </p>
          )}
        </div>
      </div >
    </div >
  );
};

export default ProductCard;
