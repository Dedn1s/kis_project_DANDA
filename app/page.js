import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Banner from "./components/Banner";
import BrandSlider from "./components/Brends";
import Header from "./header";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={inter.className}>
     <Header />
     <Banner/>      
     <BrandSlider />
    </main>
  );
}
