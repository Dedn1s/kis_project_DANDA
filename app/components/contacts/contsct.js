import styles from "./contact.module.scss";

export default function Contacts() {
    return (

      /*
            <div className={styles.container}>
             <img src='/map.png' alt="Map" />
        
              <div className={styles.overlay}>
                <h2>Контакты</h2>
                <p className={styles.paragraph} >Оптовый поставщик «Султан»</p>
        
                <div className={styles.contactInfo}>
                  <div className={styles.iconText}>
                  <img src='/location.png' alt="Location" className={styles['location-icon']} /> 
                    <div>
                      <h3>Адрес:</h3>
                      <p className={styles.paragraph} >
                        г. Кокшетау, ул. Ж. Ташенова 129Б
                        (Рынок Восточный)
                      </p>
                    </div>
                    <div className={styles.sale}>
                      <h3>Отдел продаж:</h3>
                      <p className={styles.paragraph} >
                        +7 (777) 490-00-91
             
                        opt.sultan@mail.ru
                      </p>
                    </div>
                  </div>
                </div>
        
                <div className={styles.iconText}>
                <img src='/document.png' alt="Location" className={styles['document-icon']} />
                  <div>
                    <h3>Данные налогоплательщика:</h3>
                    <p className={styles.paragraph} >
                      ИП Катран Д.С.
                      <br />
                      ИНН: 860113450858
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        */
<div className={styles.container}>
    <img src='/map.png' alt="Map" className={styles.mapImage} />

    <div className={styles.overlay}>
        <header>
            <h2>Контакты</h2>
            <p className={styles.paragraph}>Оптовый поставщик «Султан»</p>
        </header>

        <div className={styles.contactInfo}>
            <div className={styles.iconText}>
                <img src='/location.png' alt="Location" className={styles['location-icon']} />
                <div className={styles.details}>
                    <h3>Адрес:</h3>
                    <p className={styles.paragraph}>
                        г. Кокшетау, ул. Ж. Ташенова 129Б
                        (Рынок Восточный)
                    </p>
                </div>
                <div className={styles.sale}>
                    <h3>Отдел продаж:</h3>
                    <p className={styles.paragraph}>
                        +7 (777) 490-00-91
                        <br />
                        opt.sultan@mail.ru
                    </p>
                </div>
            </div>
        </div>

        <div className={styles.iconText}>
            <img src='/document.png' alt="Document" className={styles['document-icon']} />
            <div className={styles.details}>
                <h3>Данные налогоплательщика:</h3>
                <p className={styles.paragraph}>
                    ИП Катран Д.С.
                    <br />
                    ИНН: 860113450858
                </p>
            </div>
        </div>
    </div>
</div>

    )
        
}
