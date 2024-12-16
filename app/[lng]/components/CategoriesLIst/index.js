import { useTranslation } from '../../../i18n'
import { useParams } from 'next/navigation';

import Link from 'next/link';

import categories from "@/public/categoriesList.json"

export default function CategoriesList({ lng }) {
    const { t } = useTranslation(lng, 'productcard');
    const params = useParams();
    return (
        <div>
            <h1>Категории</h1>
            {categories.map((cat) => (
                <div>
                    <Link href={`/catalog/${cat.url}`}>
                    <h3>{params.lng === 'ru' ? cat.category_nameRU : cat.category_nameEN}</h3>
                    </Link>
                    {cat.subCategory.map((sub_cat) => (
                        <Link href={`/catalog/${cat.url}&${sub_cat.url}`}>
                        <p>{params.lng === 'ru' ? sub_cat.nameRU : sub_cat.nameEN}</p>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    )
}