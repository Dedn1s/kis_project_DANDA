import Link from 'next/link';
import Image from 'next/image';

import styles from "./Categories.modules.scss";


import { useTranslation } from '../../../i18n'

//импорт несменных фотографий(теперь делаем только так) 
import chemist_img from "@/public/chemist.png"
import clean_img from "@/public/clean.png"
import house_img from "@/public/house.png"
import mommys_img from "@/public/mommys.png"
import posuda_img from "@/public/posuda.png"

const categories = [
  { name: "name_1", image: chemist_img, link: "/household-chemicals" },
  { name: "name_2", image: clean_img, link: "/cosmetics" },
  { name: "name_3", image: house_img, link: "/home-goods" },
  { name: "name_4", image: mommys_img, link: "/kids-and-moms" },
  { name: "name_5", image: posuda_img, link: "/tableware" },
];

export const CategoriesPage = async ({ lng }) => {

  const { t } = await useTranslation(lng, 'categoriespage')

  return (
    <div className="categories-container">
      <div className="header">
        <h1 className="title">
          <span>{t('title_1')}</span> <span className="products">{t('title_2')}</span>
        </h1>
        <h2 className="subtitle">10 000+ {t('poz')}</h2>
      </div>
      <div className="categories-wrapper">
        {categories.map((category) => (
          <Link key={t(category.name)} href={category.link} className="category-card">
            <Image
              src={category.image}
              className="category-image"
              width={250}
              height={292}>
            </Image>
            <h2 className="category-name">{t(category.name)}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
