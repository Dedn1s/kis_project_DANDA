"use client";

import styles from "./Header_mobile.module.css";
import Button from "./Button";
import TextForm from "./TextForm"
import { useState } from "react";
import { Icon } from "lucide-react";



export default function Header_mobile() {

    const [isClick, setisClick] = useState(false);

    const toggleNavbar = () => {
        setisClick(!isClick)
    }

    return (
        <div className={styles.header}>
            <div className={styles.bar}>
                <button className={styles.button} onClick={toggleNavbar}>
                    {isClick ? (<img src="/cross.png"/>)
                        : (<img src="/menu_icon.png"/>)}
                </button>

                {isClick && (
                    <div className={styles.sidebar}>
                        <div className={styles.info}>
                            <div className={styles.loc_name_block}>
                                <img src="/point.png" className={styles.loc_name_ico}></img>
                                <div>
                                    <p className={styles.loc_name_text1}>
                                        г. Кокчетав, ул. Ж. Ташенова 129Б
                                    </p>
                                    <p className={styles.loc_name_text2}>
                                        (Рынок Восточный)
                                    </p>
                                </div>
                            </div>
                            <div className={styles.loc_name_block}>
                                <img src="/messege.png" className={styles.loc_name_ico}></img>
                                <div>
                                    <p className={styles.loc_name_text1}>
                                        opt.sultan@mail.ru
                                    </p>
                                    <p className={styles.loc_name_text2}>
                                        На связи в любое время
                                    </p>
                                </div>
                            </div>
                            <div className={styles.loc_name_block}>
                                <img src="/messege.png" className={styles.loc_name_ico}></img>
                                <div>
                                    <p className={styles.loc_name_text1}>
                                        Отдел продаж
                                    </p>
                                    <p className={styles.loc_name_text2}>
                                        +7 (777) 490-00-91
                                    </p>
                                    <p className={styles.loc_name_text3}>
                                        время работы: 9:00-20:00
                                    </p>
                                </div>
                            </div>
                            <div className={styles.phone_button}>
                                <div className={styles.figure_call}>
                                    <img src="/phone.png" />
                                </div>
                                <a className={styles.hat_phone_link} href="">Заказать звонок</a>
                            </div>
                        </div>
                        <div className={styles.menu}>
                            <div className={styles.buttons}>
                                <p className={styles.menu_title}>Меню сайта: </p>
                                <a href="">О компании</a>
                                <a href="">Доставка и оплата</a>
                                <a href="">Возврат</a>
                                <a href="">Контакты</a>
                            </div>
                            <div className={styles.price_list}>
                            <Button
                                text="Прайс лист"
                                onClick={() => alert("Кнопка в разработке")}
                                style={{ width: "100%", height: "72px" }}
                                icon="/download.png"
                            />
                            </div>
                        </div>
                    </div>
                )}
                
                <img src="/logo.png" className={styles.hat_logo}></img>
                
                <button className={styles.basket} onClick={() => alert("Кнопка в разработке")}>
                    <img src="/bascket.png"></img>
                </button>
            </div>
            <div className={styles.catalog_search} onClick={() => alert("Кнопка в разработке")}>
                <button className={styles.half_button}>
                    <img src="/catalog_blue.png"></img>
                    <p>Каталог</p>
                </button>
                <div className={styles.line}></div>
                <button className={styles.half_button} onClick={() => alert("Кнопка в разработке")}>
                    <img src="/search_blue.png"></img>
                    <p>Поиск</p>
                </button>
            </div>
        </div>

    );
}