import styles from "./contact.module.scss";
import Image from "next/image";

import { useTranslation } from '../../../i18n'

import map_img from "@/public/map.png"
import location_img from "@/public/location.png"
import document_img from "@/public/document.png"

export const Contacts = async ({ lng }) => {

    const { t } = await useTranslation(lng, 'contact')

    return (


        <div className={styles.container}>
            <Image
                src={map_img}
                className={styles.mapImage}>
            </Image>

            <div className={styles.overlay}>
                <header>
                    <h2>{t('contacts')}</h2>
                    <p className={styles.paragraph}>{t('supplier')}</p>
                </header>

                <div className={styles.contactInfo}>
                    <div className={styles.iconText}>
                        <Image
                            src={location_img}
                            className={styles.location_icon}
                            width={20}
                            height={20}>
                        </Image>
                        <div className={styles.details}>
                            <h3>{t('adress')}:</h3>
                            <p className={styles.paragraph}>
                                {t('adress_name_1')}
                                ({t('adress_name_2')})
                            </p>
                        </div>
                        <div className={styles.sale}>
                            <h3>{t('sales')}:</h3>
                            <p className={styles.paragraph}>
                                +7 (777) 490-00-91
                                <br />
                                opt.sultan@mail.ru
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.iconText}>
                    <Image
                        src={document_img}
                        className={styles.location_icon}
                        width={20}
                        height={20}>
                    </Image>
                    <div className={styles.details}>
                        <h3>{t('taxes')}:</h3>
                        <p className={styles.paragraph}>
                            {t('IP')}
                            <br />
                            {t('INN')}: 860113450858
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )

}
