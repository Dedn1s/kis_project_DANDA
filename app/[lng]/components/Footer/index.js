"use client";
import Image from "next/image";

import { useTranslation } from '../../../i18n/client'
import { Switcher } from '../sub_components/Lng_switch'

import style from "./footer.module.scss"
import Button from "../sub_components/Button/Button"
import TextForm from "../sub_components/TextForm/TextForm"

import arrow_img from "@/public/arrow.png"
import download_img from "@/public/download.png";
import tg_img from "@/public/tg.png"
import watsap_img from "@/public/watsap.png"
import visa_img from "@/public/visa.png"
import master_card_img from "@/public/master_card.png"
import logo_img from "@/public/logo_white.png"

const column_1 = [
    'description',
    'subscription'
]
/*const listItems_1 = column_1.map((raw) => (
    <p>{t(raw)}</p>
));*/

const column_2 = [
    'about',
    'delivery',
    'return',
    'contacts'
]
/*const listItems_2 = column_2.map((raw) => (
    <p>t(raw)</p>
));
*/
const column_3 = [
    'chemistry',
    'cosmetics',
    'for_home',
    'for_mom',
    'dishes'
]
/*const listItems_3 = column_3.map((raw) => (
    <p>t(raw)</p>
));
*/
const column_5 = [
    '<b>+7 (777) 490-00-91</b>',
    'work_time',
    '<b>opt.sultan@mail.ru</b> ',
    'on_line'
]
/*const listItems_5 = column_5.map((raw) => (
    <p>t(raw)</p>
));
*/

export const Footer = ({ lng }) => {

    const { t } = useTranslation(lng, 'footer')

    return (
        <div className={style.footer}>
            <div className={style.footer_text}>
                <div className={style.column}>
                    <Image
                        src={logo_img}
                        height={68}
                        width={156}>
                    </Image>
                    <div className={style.footer_logo_section} ib="sultan">
                        <ul className={style.list}>
                            {column_1.map((raw) => (
                                <p>{t(raw)}</p>
                            ))}
                            <li>
                                <TextForm
                                    text={t('email')}
                                    type="email"
                                    onClick={() => alert("Email в разработке")}
                                    style={{ width: "284px", height: "60px" }}
                                    style_button={{ width: "40px", height: "40px" }}
                                    icon={arrow_img}
                                />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={style.column}>
                    <div className={style.menu}>
                        <ul className={style.list}>
                            <h3 className={style.menu_title}>{t('menu')}:</h3>
                            {column_2.map((raw) => (
                                <p>{t(raw)}</p>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={style.column}>
                    <div className={style.categories}>
                        <ul className={style.list}>
                            <h3 className={style.categories_title}>{t('categories')}:</h3>
                            {column_3.map((raw) => (
                                <p>{t(raw)}</p>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={style.column}>
                    <div className={style.price}>
                        <ul className={style.list}>
                            <h3 className={style.price_list_title}>{t('price_list_1')}:</h3>
                            <div className={style.button}>
                                <Button
                                    text={t('price_list_2')}
                                    onClick={() => alert("Кнопка в разработке")}
                                    icon={download_img}
                                    icon_style={{ width: "30px", height: "30px" }}
                                />
                            </div>
                            <div className={style.connection_mas}>
                                <li className={style.no_bullet}>{t('messenger')}:</li>
                                <Image
                                    src={tg_img}
                                    className={style.connection_mas_img}
                                    height={40}>
                                </Image>
                                <Image
                                    src={watsap_img}
                                    className={style.connection_mas_img}
                                    height={40}>
                                </Image>
                            </div>
                        </ul>
                    </div>
                </div>

                <div className={style.column} id="contacts">
                    <div className={style.contacts}>
                        <ul className={style.list}>
                            <h3 className={style.contact_title}>{t('contacts')}:</h3>
                            <li className={style.contact_phone}><b>+7 (777) 490-00-91</b></li>
                            <li className={style.contact_work_time}>в{t('work_time')}</li>
                            <li className={style.contact_question}><u>{t('want_call')}</u></li>
                            <li></li>
                            <li className={style.contact_email}><b>opt.sultan@mail.ru</b></li>
                            <li className={style.contact_available}>{t('on_line')}</li>
                            <li className={style.contact_icons}>
                                <Image
                                    src={visa_img}
                                    height={40}>
                                </Image>
                                <Image
                                    src={master_card_img}
                                    height={40}>
                                </Image>
                            </li>
                        </ul>
                    </div>
                    <Switcher t={t} lng={lng} />
                </div>
            </div>
        </div>
    );
}
