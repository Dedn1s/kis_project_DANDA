"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
/*import styles from "./page.module.css";*/
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/header";
import Header_mobile from "../components/Header/Header_mobile";
import CategoriesPage from "../components/Categories/Categories"
import BrandSlider from "../components/Brends/Brends";
import Contacts from "../components/contacts/contsct";
import SaleItems from "../components/SaleItems/saleItems";
import Footer from "../components/Footer/footer"

import { serverSideTranslations } from 'next-i18next';

const inter = Inter({ subsets: ['latin'] });
const width = window.innerWidth

export default function Home() {
  return (
    <main className={inter.className}>
     {width <= 768 ? (<Header_mobile/>)
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