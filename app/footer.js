"use client";

import style from "./footer.module.scss"
import Button from "./components/Button";

const column_1 = [
    'Компание "Султан" - снабжаем розничные магазины товарами"под ключ" в Кокчетве и Акмолинской области',
    'Подписка и акции'
]
const listItems_1 = column_1.map((raw) => (
    <p>{raw}</p>
));

const column_2 = [
    'О компании',
    'Доставка и оплата',
    'Возврат',
    'Контакты'
]
const listItems_2 = column_2.map((raw) => (
    <p>{raw}</p>
));              

const column_3 =[
    'Бытовая химия',
                'Косметика и гигиена',
                'Товары для дома',
                'Товары для детей и мам',
                'Посуда'
]
const listItems_3 = column_3.map((raw) => (
    <p>{raw}</p>
));

const column_5 = [
'<b>+7 (777) 490-00-91</b>',
                'время работы: 9:00-20:00',
                '<b>opt.sultan@mail.ru</b> ',
                'на связи в любое время'
]
const listItems_5 = column_5.map((raw) => (
    <p>{raw}</p>
));


export default function Footer() {
  return (
    <div className={style.footer}>
    <div className={style.footer_text}>
    <div className={style.column}>
    <img src="/logo_white.png" height="64px" alt="Логотип Султан" />
        <div className={style.footer_logo_section} ib="sultan">
            <ul className={style.list}>
                {listItems_1}
                <li>
                    <input className={style.input_mail} type="email" placeholder="Введите ваш E-mail:" id="email" name="email" />
                </li>
            </ul>
        </div>
    </div>

        <div className={style.column}>
            <div className={style.menu}>
            <ul className={style.list}>
            <h3 className={style.menu_title}>Меню сайта:</h3>
                {listItems_2}
            </ul>
            </div>
        </div>

        <div className={style.column}>
        <div className={style.categories}>
            <ul className={style.list}>
            <h3 className={style.categories_title}>Категории:</h3>
                {listItems_3}
            </ul>
        </div>
        </div>

        <div className={style.column}>
            <div className={style.price}>
            <ul className={style.list}>
            <h3 className={style.price_list_title}>Скачать прайс-лист:</h3>
                <Button className={style.Button}
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
        </div>

        <div className={style.column} id="contacts">
        <div className={style.contacts}>
            <ul className={style.list}>
            <h3 className={style.contact_title}>Контакты:</h3>
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
    </div>
  );
}
