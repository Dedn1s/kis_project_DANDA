import Image from "next/image";
import { Inter } from "next/font/google";
/*import styles from "./page.module.css";*/
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
import { CategoriesPage } from "./components/Categories"
import { BrandSlider } from "./components/Brends";
import { Carousel } from "./components/Carousel";
import { Footer } from "./components/Footer"
import { Contacts } from "./components/contacts";
import { SaleItems } from "./components/SaleItems";
import { useTranslation } from '../i18n'

import styles from "./page.module.css"

const inter = Inter({ subsets: ['latin']})

export default async function Home({params: { lng }}) {

  const { t } = await useTranslation(lng)
  
  return (
    <main className={inter.className}>
     <Header lng={lng}/>
     <Banner lng={lng}/>
     <SaleItems lng={lng}/>
     <CategoriesPage lng={lng}/>
     <Carousel lng={lng}/>
     <BrandSlider lng={lng}/>
     <Contacts lng={lng}/>
     <Footer lng={lng}/>
    </main>

  );
}