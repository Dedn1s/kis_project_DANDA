"use client"
//import Catalog_list from '../../components/Catalog_list';
import useGlobal from './store';

export default function Basket({ params: { lng } }){
    /*useEffect(() => {
        // Загрузка данных из public/product.json
        fetch("/product.json")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            // Фильтруем продукты по названиям брендов и производителям
            const addedProducts = data.filter(product =>
              (products_in_basket.includes(product.id))
            );
            setProducts(addedProducts);
          })
          .catch((error) => {
            console.error("Ошибка при загрузке данных:", error);
          });
      }, [products_in_basket]);*/

      const [ globalState, globalActions ] = useGlobal();

    const { products_ids } = globalState;

    const {addedInBasket} = globalActions;
    

      return(
        <div>
        <button onClick={() => addedInBasket.In(products_ids, [3,4])}>tre</button>
        <p>{products_ids}</p>
        </div>
      )
}