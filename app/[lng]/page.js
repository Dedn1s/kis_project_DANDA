import Image from "next/image";
import { Inter } from "next/font/google";
/*import styles from "./page.module.css";*/
import { Banner } from "./components/Banner";
import { Header } from "./components/Header";
//import CategoriesPage from "./components/Categories/Categories"
//import BrandSlider from "./components/Brends/Brand";
//import Swiper from "./components/Carousel/Carousel";
//import Footer from "./components/Footer/footer"
//import Contacts from "./components/contacts/contsct";
import SaleItems from "./components/SaleItems/saleItems";
import { useTranslation } from '../i18n'

const inter = Inter({ subsets: ['latin']})

export default async function Home({params: { lng }}) {

  const { t } = await useTranslation(lng)
  
  return (
    <main className={inter.className}>
     <Header lng={lng}/>
     <Banner lng={lng}/>
     <SaleItems/>
    </main>

  );
}