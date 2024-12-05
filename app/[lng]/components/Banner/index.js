"use client"
import { Plus } from "lucide-react";
import styles from "./Banner.module.scss";
import { useTranslation } from '../../../i18n/client'
import Image from "next/image";

import banner_img from "@/public/banner.png"

export const Banner = ({ lng }) => {

  const { t } = useTranslation(lng, 'banner')

  return (
    <>
      <div className={styles.banner__limit}>
        <div className={styles.banner}></div>
        <Image
          src={banner_img}
          className={styles.banner}>
        </Image>
        <div className='container'>
          <div className={styles.banner__col}>
            <h1 className={styles.content__title}>
              {t('title')}
            </h1>
            <h2 className={styles.content__subtitle}>{t('subtitle')}</h2>
            <button className={styles.banner__content__button}>
              {t('incat')}
            </button>
            <div className={styles.banner__details}>
              <div className={styles.detail__item}>
                <Plus className={styles.icon__plus} color="white" size={16} />
                <p>
                  {t('offer')}
                </p>
              </div>
              <div>
                <div className={styles.detail__item}>
                  <Plus className={styles.icon__plus} color="white" size={16} />
                  <p>
                    {t('deliver')} ₸
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.banner__details_mob}>
        <div className={styles.detail__item}>
          <Plus className={styles.icon__plus} color="white" size={16} />
          <p>
            {t('offer')}
          </p>
        </div>
        <div>
          <div className={styles.detail__item}>
            <Plus className={styles.icon__plus} color="white" size={16} />
            <p>
              {t('deliver')} ₸
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 