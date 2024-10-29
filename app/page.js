import Image from "next/image";
import styles from "./page.module.css";
import Banner from "./components/Banner";
import BrandSlider from "./components/Brends";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Banner/>      
      <BrandSlider />
    </div>
  );
}
