"use client"
import styles from "./header.module.scss";
import Button from "../sub_components/Button/Button";
import TextForm from "../sub_components/TextForm/TextForm"
import Image from 'next/image'

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
                                src = "/point.png"
                                className={styles.loc_name_ico}
                                height = {16}
                                width = {16}></Image>
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
                            <img src="/messege.png" className={styles.loc_name_ico}></img>
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
                    <img src="/logo.png" className={styles.hat_logo}></img>

                    <Button
                        text={t('cat')} 
                        textColor="white"
                        href=""
                        style={{ width: "180px", height: "59px" }}
                        icon="/catalog.png"
                    />

                    <TextForm
                        text={t('search')}
                        type="search"
                        onClick={() => alert("Поиск в разработке")}
                        style={{ width: "256px", height: "60px" }}
                        style_button={{ width: "40px", height: "40px" }}
                        icon="/search.png"
                    />

                    <div className={styles.hat_phone_number}>
                        <div>
                            <a className={styles.hat_phone_link} href="tel:+77774900091">+7 (777) 490-00-91</a>
                            <p>{t('timework')}: 9:00-20:00</p>
                            <a className={styles.hat_phone_link2} href="">{t('wantcall')}</a>
                        </div>
                        <img src="/phone_assistant.png"></img>
                    </div>

                    <Button
                        text={t('pricelist')}
                        textColor="white"
                        onClick={() => alert("Кнопка в разработке")}
                        style={{ width: "200px", height: "59px" }}
                        icon="/download.png"
                    />

                    <div className={styles.hat_bascket}>
                        <img src="/bascket.png"></img>
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
                        {isClick ? (<img src="/cross.png" />)
                            : (<img src="/menu_icon.png" />)}
                    </button>

                    {isClick && (
                        <div className={styles.sidebar_mobile}>
                            <div className={styles.info_mobile}>
                                <div className={styles.loc_name_block_mobile}>
                                    <img src="/point.png" className={styles.loc_name_ico_mobile}></img>
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
                                    <img src="/messege.png" className={styles.loc_name_ico_mobile}></img>
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
                                    <img src="/messege.png" className={styles.loc_name_ico_mobile}></img>
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
                                        <img src="/phone.png" />
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
                                        icon="/download.png"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <img src="/logo.png" className={styles.hat_logo_mobile}></img>

                    <button className={styles.basket_mobile} onClick={() => alert("Кнопка в разработке")}>
                        <img src="/bascket.png"></img>
                    </button>
                </div>
                <div className={styles.catalog_search_mobile}>
                    <button className={styles.half_button_mobile} onClick={() => alert("Кнопка в разработке")}>
                        <img src="/catalog_blue.png"></img>
                        <p>{t('cat')}</p>
                    </button>
                    <div className={styles.line_mobile}></div>
                    <button className={styles.half_button_mobile} onClick={() => alert("Кнопка в разработке")}>
                        <img src="/search_blue.png"></img>
                        <p>{t('search')}</p>
                    </button>
                </div>
            </div>

        </div>
    )
    
}
