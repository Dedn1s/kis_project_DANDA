"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
/*import styles from "./page.module.css";*/
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/header";
import CategoriesPage from "./components/Categories/Categories"
import BrandSlider from "./components/Brends/Brand";
import Footer from "./components/Footer/footer"
import Contacts from "./components/contacts/contsct";
import SaleItems from "./components/SaleItems/saleItems";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
     <Header/>
     <Banner/>
     <SaleItems/>
     <CategoriesPage />
     <BrandSlider />
     <Contacts />
     <Footer />
    </main>

  );
}