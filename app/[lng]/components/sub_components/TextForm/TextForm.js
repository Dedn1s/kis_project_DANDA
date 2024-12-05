import Styles from "./TextForm.module.css"
import Image from "next/image";

export default function Button({ text, type, onClick, href, style, style_button, icon, style_icon}) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            alert("Форма в разработке"); // Если нет onClick, выдает сообщение
        }
    };

    return (
        <form className={Styles.search} action="" method="get" style={style}>
        <input name="s" placeholder={text} type={type}></input>
        <button className={Styles.button} onClick={handleClick} style={style_button}>
            <Image
                src = {icon}
                className = {style.button_img}
                style = {style_icon}>
            </Image>
        </button>
    </form>
    );
}