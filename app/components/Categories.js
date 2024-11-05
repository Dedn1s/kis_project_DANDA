import Link from 'next/link';
import "../globals.css";
import styles from "./Categories.css";

const categories = [
  { name: "Бытовая химия", image: "/chemist.png", link: "/household-chemicals" },
  { name: "Косметика и гигиена", image: "/clean.png", link: "/cosmetics" },
  { name: "Товары для дома", image: "/house.png", link: "/home-goods" },
  { name: "Товары для детей и мам", image: "/mommys.png", link: "/kids-and-moms" },
  { name: "Посуда", image: "/posuda.png", link: "/tableware" },
];

export default function CategoriesPage() {
  return (
    <div></div>

    /*
    <div className="categories-container">
        <div className="header">
            <h1 className="title">
                <span>КАТЕГОРИИ</span> <span className="products">ТОВАРОВ</span>
            </h1>
            <h2 className="subtitle">10 000+ ходовых позиций по специальным ценам</h2>
        </div>
      <div className="categories-wrapper">
        {categories.map((category) => (
          <Link key={category.name} href={category.link} className="category-card">
            <img src={category.image} alt={category.name} className="category-image" />
            <h2 className="category-name">{category.name}</h2>
          </Link>
        ))}
      </div>
    </div>
    */
  );
}
