"use client"

import { useTranslation } from '../../../i18n/client'
import { useParams } from 'next/navigation';

import Link from 'next/link';
import styles from './CategoriesList.module.scss';

import categories from "@/public/categoriesList.json"

export const CategoriesList = ({ lng }) => {
    const { t } = useTranslation(lng, 'categories_list');
    const params = useParams();
    return (
        <div className={styles.list}>
            <h1 className={styles.mainText}>Категории</h1>
            <p>{t('example1')}</p>{/* пример вызова локализации(нужно будет удалить)*/}
            {categories.map((cat) => (
                <div>
                    <Link href={`/catalog/${cat.url}`} className={styles.list_category}>
                    <h3>{params.lng === 'ru' ? cat.category_nameRU : cat.category_nameEN}</h3>
                    </Link>
                    {cat.subCategory.map((sub_cat) => (
                        <Link href={`/catalog/${cat.url}&${sub_cat.url}`} className={styles.list_subcategory}>
                        <p>{params.lng === 'ru' ? sub_cat.nameRU : sub_cat.nameEN}</p>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}