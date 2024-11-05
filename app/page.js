"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
/*import styles from "./page.module.css";*/
import Banner from "./components/Banner";
import Header from "./header";
import Header_mobile from "./components/Header_mobile";
import CategoriesPage from "./components/Categories"
import BrandSlider from "./components/Brends";
import Footer from "./footer"
import Contacts from "./contacts/contsct";
import SaleItems from "./components/saleItems"


const inter = Inter({ subsets: ['latin'] })
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