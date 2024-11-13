"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
/*import styles from "./page.module.css";*/
import Banner from "@/app/components/Banner/Banner";
import Header from "@/app/components/Header/header"                                
import Header_mobile from "@/app/components/Header/Header_mobile";
import CategoriesPage from "@/app/components/Categories/Categories"
import BrandSlider from "@/app/components/Brends/Brends";
import Contacts from "@/app/components/contacts/contsct";
import SaleItems from "@/app/components/SaleItems/saleItems";
import Footer from "@/app/components/Footer/footer"

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useEffect, useState } from 'react';


const inter = Inter({ subsets: ['latin'] });



export default function Home() {
  
const [width, setWidth] = useState(0);

useEffect(() => {
    // Код внутри useEffect будет выполнен только на клиенте
    setWidth(window.innerWidth);

    // Если нужно отслеживать изменения размера окна
    const handleResize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Удаляем слушатель при размонтировании компонента
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []); // Пустой массив зависимостей означает, что эффект выполнится один раз при монтировании

  return (
    <main className={inter.className}>
     {{width} <= 768 ? (<Header_mobile/>)
        :(<Header/>)}
     <Banner/>
     <SaleItems/>
     <CategoriesPage />
     <BrandSlider />
     <Contacts />
     <Footer />
    </main>

  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}