import Link from "next/link";
import styles from "./Button.module.scss";

export default function Button({
    text,
    href,
    style,
    icon,
    size = "medium",
    textColor = "inherit", 
}) {
    const buttonClass = `${styles.button} ${
        styles[`button_${size}`] || styles.button_medium
    }`;

    const customStyle = {
        color: textColor, 
        ...style, 
    };

    if (href) {
        return (
            <Link href={href} className={buttonClass} style={customStyle}>
                {text}
                {icon && <img src={icon} alt="Иконка" className={styles.icon} />}
            </Link>
        );
    }

    return (
        <button
            className={buttonClass}
            style={customStyle}
            aria-disabled="true"
        >
            {text}
            {icon && <img src={icon} alt="Иконка" className={styles.icon} />}
        </button>
    );
}
