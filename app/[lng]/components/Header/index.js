"use client"
import styles from "./header.module.scss";
import Button from "../sub_components/Button/Button";
import TextForm from "../sub_components/TextForm/TextForm"
import Image from 'next/image'

//импорт фотографий (теперь делаем только так)
import point_img from "@/public/point.png"
import messege_img from "@/public/messege.png"
import logo_img from "@/public/logo.png"
import catalog_img from "@/public/catalog.png"
import download_img from "@/public/download.png"; 
import search_img from "@/public/search.png";
import phone_assistant_img from "@/public/phone_assistant.png";
import bascket_img from "@/public/bascket.png"
import cross_img from "@/public/cross.png"
import menu_icon_img from "@/public/menu_icon.png"
import phone_img from "@/public/phone.png";
import search_blue_img from "@/public/search_blue.png"
import catalog_blue_img from "@/public/catalog_blue.png"

import { useState } from "react";
import { useTranslation } from '../../../i18n/client'

export const Header = ({ lng }) => {

    const [isClick, setisClick] = useState(false);

    const { t } = useTranslation(lng, 'header')

    const toggleNavbar = () => {
        setisClick(!isClick)
    }

    return( 
        <div>

            <div className={styles.header}>
                <div className={styles.menu}>
                    <div className={styles.loc_name}>
                        <div className={styles.loc_name_block}>
                            <Image 
                                src = {point_img}
                                className={styles.loc_name_ico}
                                height = {16}
                                width = {16}>
                            </Image>
                            <div>
                                <p className={styles.loc_name_text1}>
                                    {t('adress_1')}
                                </p>
                                <p className={styles.loc_name_text2}>
                                    ({t('adress_2')})
                                </p>
                            </div>
                        </div>

                        <div className={styles.loc_name_block}>
                            <Image 
                                src = {messege_img}
                                className={styles.loc_name_ico}
                                height = {16}
                                width = {16}>
                            </Image>
                            <div>
                                <p className={styles.loc_name_text1}>
                                    opt.sultan@mail.ru
                                </p>
                                <p className={styles.loc_name_text2}>
                                    {t('oncall')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <a className={styles.a_1} href="">{t('link_1')}</a>
                        <div className={styles.line}></div>
                        <a className={styles.a_1} href="">{t('link_2')}</a>
                        <div className={styles.line}></div>
                        <a className={styles.a_1} href="">{t('link_3')}</a>
                        <div className={styles.line}></div>
                        <a className={styles.a_2} href="">{t('link_4')}</a>
                    </div>
                </div>

                <div className={styles.hat}>
                    <Image 
                        src = {logo_img}
                        className={styles.hat_logo}
                        height = {68}
                        width = {156}>
                    </Image>

                    <Button
                        text={t('cat')} 
                        textColor="white"
                        href=""
                        style={{ width: "180px", height: "59px" }}
                        icon= {catalog_img}
                        icon_style={{width: "30px", height: "30px"}}
                    />

                    <TextForm
                        text={t('search')}
                        type="search"
                        onClick={() => alert("Поиск в разработке")}
                        style={{ width: "256px", height: "60px" }}
                        style_button={{ width: "40px", height: "40px" }}
                        icon= {search_img}
                        style_icon={{width:"25px", height:"25px"}}
                    />

                    <div className={styles.hat_phone_number}>
                        <div>
                            <a className={styles.hat_phone_link} href="tel:+77774900091">+7 (777) 490-00-91</a>
                            <p>{t('timework')}: 9:00-20:00</p>
                            <a className={styles.hat_phone_link2} href="">{t('wantcall')}</a>
                        </div>
                        <Image 
                            src = {phone_assistant_img}
                            className={styles.hat_phone_number_img}
                            height = {92}>
                        </Image>
                    </div>

                    <Button
                        text={t('pricelist')}
                        textColor="white"
                        onClick={() => alert("Кнопка в разработке")}
                        style={{ width: "180px", height: "59px" }}
                        icon= {download_img}
                        icon_style={{width: "30px", height: "30px"}}
                    />

                    <div className={styles.hat_bascket}>
                    	<Image 
                            src = {bascket_img}
                            className={styles.hat_bascket_img}
                            height = {44}>
                        </Image>
                        <div className={styles.hat_bascket_text}>
                            <p className={styles.loc_name_text2}>{t('basket')}</p>
                            <p className={styles.loc_name_text1}>12 478</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.header_mobile}>
                <div className={styles.bar_mobile}>
                    <button className={styles.button_mobile} onClick={toggleNavbar}>
                        {isClick ? (
                            <Image 
                                src = {cross_img}
                                className={styles.button_mobile_img}
                                height = {10}>
                            </Image>
                        ) : (
                            <Image 
                                src = {menu_icon_img}
                                className={styles.button_mobile_img}
                                height = {10}>
                            </Image>)}
                    </button>

                    {isClick && (
                        <div className={styles.sidebar_mobile}>
                            <div className={styles.info_mobile}>
                                <div className={styles.loc_name_block_mobile}>
                                    <Image 
                                        src = {point_img}
                                        className={styles.loc_name_ico_mobile}
                                        height = {16}
                                        width  = {16}>
                                    </Image>
                                    <div>
                                        <p className={styles.loc_name_text1_mobile}>
                                            {t('adress_1')}
                                        </p>
                                        <p className={styles.loc_name_text2_mobile}>
                                            ({t('adress_2')})
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.loc_name_block_mobile}>
                                    <Image 
                                        src = {messege_img}
                                        className={styles.loc_name_ico_mobile}
                                        height = {16}
                                        width  = {16}>
                                    </Image>
                                    <div>
                                        <p className={styles.loc_name_text1_mobile}>
                                            opt.sultan@mail.ru
                                        </p>
                                        <p className={styles.loc_name_text2_mobile}>
                                            {t('oncall')}
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.loc_name_block_mobile}>
                                    <Image 
                                        src = {messege_img}
                                        className={styles.loc_name_ico_mobile}
                                        height = {16}
                                        width  = {16}>
                                    </Image>
                                    <div>
                                        <p className={styles.loc_name_text1_mobile}>
                                            {t('salegroup')}
                                        </p>
                                        <p className={styles.loc_name_text2_mobile}>
                                            +7 (777) 490-00-91
                                        </p>
                                        <p className={styles.loc_name_text3_mobile}>
                                            {t('timework')}: 9:00-20:00
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.phone_button_mobile}>
                                    <div className={styles.figure_call_mobile}>
                                        <Image 
                                            src = {phone_img}
                                            className={styles.figure_call_mobile_img}
                                            height = {10}>
                                        </Image>
                                    </div>
                                    <a className={styles.hat_phone_link_mobile} href="">{t('wantcall')}</a>
                                </div>
                            </div>
                            <div className={styles.menu_mobile}>
                                <div className={styles.buttons_mobile}>
                                    <p className={styles.menu_title_mobile}>{t('menu')}: </p>
                                    <a href="">{t('link_1')}</a>
                                    <a href="">{t('link_2')}</a>
                                    <a href="">{t('link_3')}</a>
                                    <a href="">{t('link_4')}</a>
                                </div>
                                <div className={styles.price_list_mobile}>
                                    <Button
                                        text={t('pricelist')}
                                        textColor="white"
                                        onClick={() => alert("Кнопка в разработке")}
                                        style={{ width: "100%", height: "72px" }}
                                        icon = {download_img}
                                        icon_style={{width: "30px", height: "30px"}}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <Image 
                        src = {logo_img}
                        className={styles.hat_logo_mobile}
                        height = {44}
                        width  = {100}>
                    </Image>
                    

                    <button className={styles.basket_mobile} onClick={() => alert("Кнопка в разработке")}>
                        <Image 
                            src = {bascket_img}
                            className={styles.basket_mobile_img}
                            height = {32}>
                        </Image>
                    </button>
                </div>
                <div className={styles.catalog_search_mobile}>
                    <button className={styles.half_button_mobile} onClick={() => alert("Кнопка в разработке")}>
                        <Image 
                            src = {catalog_blue_img}
                            className={styles.half_button_mobile_img}
                            height = {16}>
                        </Image>
                        <p>{t('cat')}</p>
                    </button>
                    <div className={styles.line_mobile}></div>
                    <button className={styles.half_button_mobile} onClick={() => alert("Кнопка в разработке")}>
                        <Image 
                            src = {search_blue_img}
                            className={styles.half_button_mobile_img}
                            height = {16}>
                        </Image>
                        <p>{t('search')}</p>
                    </button>
                </div>
            </div>

        </div>
    )
    
}
