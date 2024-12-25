import Link from "next/link";
import styles from "./Button.module.scss";
import Image from "next/image";

export default function Button({
    text,
    href,
    action,
    style,
    icon,
    icon_style,
    size = "medium",
    textColor = "inherit",
    textSize,
}) {
    const buttonClass = `${styles.button} ${styles[`button_${size}`] || styles.button_medium
        }`;

    const customStyle = {
        color: textColor,
        ...style,
    };

    if (href) {
        return (
            <button
            onClick= {() => window.location = '/catalog/none'}
            className={buttonClass}
            style={customStyle}
            aria-disabled="true"
        >
            {text}

            {icon && text && <Image
                src={icon}
                className={styles.icon_text}
                style={icon_style}></Image>}

            {icon && text === "" && <Image
                src={icon}
                className={styles.icon}
                style={icon_style}></Image>}
        </button>
        );
    }

    return (
        <button
            onClick={action}
            className={buttonClass}
            style={customStyle}
            aria-disabled="true"
        >
            {text}

            {icon && text && <Image
                src={icon}
                className={styles.icon_text}
                style={icon_style}></Image>}

            {icon && text === "" && <Image
                src={icon}
                className={styles.icon}
                style={icon_style}></Image>}
        </button>
    );
}
