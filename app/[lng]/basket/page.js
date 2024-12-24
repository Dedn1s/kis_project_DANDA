import Basket from "../components/Basket";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function Page({ params: { lng } }) {
  return (
    <div>
      <Header lng={lng} />
      <Basket />
      <Footer lng={lng} />
    </div>
  );
}
