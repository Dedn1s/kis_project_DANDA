import Styles from "./TextForm.module.css"

export default function Button({ text, type, onClick, href, style, style_button, icon}) {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            alert("Форма в разработке"); 
        }
    };

    return (
        <form className={Styles.search} action="" method="get" style={style}>
        <input name="s" placeholder={text} type={type}></input>
        <button className={Styles.button} onClick={handleClick} style={style_button}>
            <img src={icon}></img>
        </button>
    </form>
    );
}