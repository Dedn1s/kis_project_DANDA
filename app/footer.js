import style from "./footer.module.css"

export default function Footer() {
  return (
    <div className={style.footer}>
    <div className={style.footer_text}>
    <div className={style.column}>
            <img src="/logo_white.png" height = "64px"></img><p>Султан</p>
            <ul>
                <li>
                    
                  <p1>Компание "Султан" - снабжаем
                    розничные магазины товарами
                    "под ключ" в Кокчетве и Акмолинской
                    области </p1>
                </li>
                
                <li1>Подписка и акции</li1>
                <p>
                <input className={style.input_mail} type="email" placeholder="user@gmail.com" id="email" name="email"/>
                </p>
            </ul>
        </div>

        <div className={style.column}>
            <p>Mеню сайта</p>
            <ul>
                <li>О компании</li>
                <li>Доставка и оплата</li>
                <li>Возврат</li>
                <li>Контакты</li>
            </ul>
        </div>

        <div className={style.column}>
            <p>Котегории</p>
            <ul>
                <li>Бытовая химия</li>
                <li>Косметика и гигиена</li>
                <li>Товары для дома</li>
                <li>Товары для детей и мам</li>
                <li>Посуда</li>
            </ul>
        </div>
        <div className={style.column}>
            <p>Скачать прайс-лист</p>
            <ul>
                <button className={style.price_button}>Прайс лист</button>
                <li>Связь в мессенжерах</li>
                <img src="/tg.png" height="40"></img>
                <img src="/watsap.png" height="40"></img>
            </ul>
        </div>
        <div className={style.column}>
            <p>Контакты:</p>
            <ul>
                <li><b>+7 (777) 490-00-91</b></li>
                <li>время работы: 9:00-20:00</li>
                <li></li>
                <li><b>opt.sultan@mail.ru</b> </li>
                <li>на связи в любое время</li>
                <img src="/visa.png" height="40"></img>
                <img src="/master_card.png" height="40"></img>
            </ul>
        </div>
    </div>

    
    </div>
  );
}
