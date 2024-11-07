"use client";

import styles from "./header.module.css";
import Button from "../sub_components/Button/Button";
import TextForm from "../sub_components/TextForm/TextForm"

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.loc_name}>
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
                </div>

                <div className={styles.buttons}>
                    <a className={styles.a_1} href="">О компании</a>
                    <div className={styles.line}></div>
                    <a className={styles.a_1} href="">Доставка и оплата</a>
                    <div className={styles.line}></div>
                    <a className={styles.a_1} href="">Возврат</a>
                    <div className={styles.line}></div>
                    <a className={styles.a_2} href="">Контакты</a>
                </div>
            </div>

            <div className={styles.hat}>
                <img src="/logo.png" className={styles.hat_logo}></img>

                <Button
                    text="Каталог"
                    onClick={() => alert("Кнопка в разработке")} 
                    style={{ width: "180px", height: "59px" }}
                    icon="/catalog.png"  
                />
                
                <TextForm 
                    text="Поиск..." 
                    type="search"
                    onClick={() => alert("Поиск в разработке")} 
                    style={{ width: "256px", height: "60px" }}
                    style_button={{width: "40px", height: "40px"}}
                    icon="/search.png"
                />

                <div className={styles.hat_phone_number}>
                    <div>
                        <a className={styles.hat_phone_link} href="tel:+77774900091">+7 (777) 490-00-91</a>
                        <p>время работы: 9:00-20:00</p>
                        <a className={styles.hat_phone_link2} href="">Заказать звонок</a>
                    </div>
                    <img src="/phone_assistant.png"></img>
                </div>

                <Button 
                    text="Прайс лист" 
                    onClick={() => alert("Кнопка в разработке")} 
                    style={{ width: "200px", height: "59px" }}
                    icon="/download.png"
                />
                
                <div className={styles.hat_bascket}>
                    <img src="/bascket.png"></img>
                    <div className={styles.hat_bascket_text}>
                        <p className={styles.loc_name_text2}>Корзина</p>
                        <p className={styles.loc_name_text1}>12 478</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
