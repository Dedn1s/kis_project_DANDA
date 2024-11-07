"use client";

import style from "./footer.module.css"
import Button from "./components/Button";
import TextForm from "./components/TextForm"

export default function Footer() {
  return (
    <div className={style.footer}>
    <div className={style.footer_text}>
    <div className={style.column}>
    <img src="/logo_white.png" height="64px" alt="Логотип Султан" />
        <div className={style.footer_logo_section}>
            <ul className={style.footer_text_block}>
                <li>
                    <p className={style.company_description}>
                        Компания "Султан" - снабжаем<br />
                        розничные магазины товарами<br />
                        "под ключ" в Кокчетве и Акмолинской<br /> 
                        области</p>
                </li>
                <li className={style.subscription_title}>Подпишись на скидки и акции</li>
                <li>
                <TextForm 
                    text="Введите ваш email..." 
                    type="email"
                    onClick={() => alert("Email в разработке")} 
                    style={{ width: "284px", height: "60px" }}
                    style_button={{width: "40px", height: "40px"}}
                    icon="/arrow.png"
                />
                </li>
            </ul>
        </div>
    </div>

        <div className={style.column}>
            <p className={style.menu_title}>Меню сайта:</p>
            <ul className={style.menu_list}>
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Возврат</li>
                <li>Контакты</li>
            </ul>
        </div>

        <div className={style.column}>
            <p className={style.categories_title}>Категории:</p>
            <ul className={style.categories_list}>
                <li>Бытовая химия</li>
                <li>Косметика и гигиена</li>
                <li>Товары для дома</li>
                <li>Товары для детей и мам</li>
                <li>Посуда</li>
            </ul>
        </div>


        <div className={style.column}>
        <p className={style.price_list_title}>Скачать прайс-лист:</p>
            <ul className={style.price_list_section}>
                <Button 
                    text="Прайс лист" 
                    onClick={() => alert("Кнопка в разработке")} 
                    style={{ width: "200px", height: "59px" }}
                    icon="/download.png"
                />
                <li className={style.no_bullet}>Связь в мессенджерах</li>
                <img src="/tg.png" height="40" alt="Telegram"></img>
                <img src="/watsap.png" height="40" alt="WhatsApp"></img>
            </ul>
        </div>

        <div className={style.column}>
        <p className={style.contact_title}>Контакты:</p>
            <ul className={style.no_bullet}>
                <li className={style.contact_phone}><b>+7 (777) 490-00-91</b></li>
                <li className={style.contact_work_time}>время работы: 9:00-20:00</li>
                <li className={style.contact_question}><u>Заказать звонок</u></li>
                <li></li>
                <li className={style.contact_email}><b>opt.sultan@mail.ru</b></li>
                <li className={style.contact_available}>на связи в любое время</li>
                <li className={style.contact_icons}>
                    <img src="/visa.png" height="40" alt="Visa" />
                    <img src="/master_card.png" height="40" alt="MasterCard" />
                </li>
            </ul>
        </div>


    </div>

    
    </div>
  );
}
