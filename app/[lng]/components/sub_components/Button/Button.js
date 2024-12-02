import Link from "next/link";
import styles from "./Button.module.scss";
import Image from "next/image";

export default function Button({
    text,
    href,
    style,
    icon,
    icon_style,
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
                {icon && <Image
                        src = {icon}
                        className={styles.icon}
                        style = {icon_style}></Image>}
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
            {icon && <Image
                        src = {icon}
                        className={styles.icon}
                        style = {icon_style}></Image>}
        </button>
    );
}
