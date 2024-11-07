"use client";

import styles from "./Button.module.scss";

export default function Button({ text, onClick, href, style, icon }) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            alert("Кнопка в разработке"); // Если нет onClick, выдает сообщение
        }
    };

    return (
        <button className={styles.button} onClick={handleClick} style={style}>
            {text}
            {icon && <img src={icon} alt="Иконка" className={styles.icon} />}
        </button>
    );
}
