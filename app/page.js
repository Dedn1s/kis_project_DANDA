"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
/*import styles from "./page.module.css";*/
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/header";
import Header_mobile from "./components/Header/Header_mobile";
import CategoriesPage from "./components/Categories/Categories"
import BrandSlider from "./components/Brends/Brends";
import Footer from "./components/Footer/footer"
import Contacts from "./components/contacts/contsct";
import SaleItems from "./components/SaleItems/saleItems";


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