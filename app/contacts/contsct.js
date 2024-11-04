import styles from "./contact.module.css";

export default function Contacts() {
    return (
        <div className={styles.cont}>
            <img src='/map.png' alt="Map" />
            <div className={styles.rectangle}></div>
            <div className={styles['contact-title']}>Контакты</div>
            <div className={styles['contact-subtitle']}>Оптовый поставщик "Султан"</div>
            <div className={styles['contact-info']}>
                <div className={styles['address-block']}>
                    <img src='/location.png' alt="Location" className={styles['location-icon']} />
                    <div className={styles['address-text']}>
                        <div className={styles['address-label']}>Адрес:</div>
                        <div className={styles['address-detail']}>г. Кокчетав, ул. Ж. Ташенова 129Б (Рынок Восточный)</div>
                    </div>
                </div>
                <div className={styles['sales-department']}>
                    <div className={styles['sales-title']}>Отдел продаж:</div>
                    <div className={styles['sales-phone']}>+7 (777) 490-00-91</div>
                    <div className={styles['sales-email']}>opt.sultan@mail.ru</div>
                </div>
            </div>
            <div className={styles['dashed-line']}></div> 
            <div className={styles['document-block']}>
                    <img src='/document.png' alt="Location" className={styles['document-icon']} />
                    <div className={styles['document-text']}>
                        <div className={styles['document-label']}>Данные налогоплательщика:</div>
                        <div className={styles['document-detail']}>ИП Катран Д.С.<br />ИИН: 860113450858 
                        </div>
                    </div>
                </div>
        </div>
    );
}
