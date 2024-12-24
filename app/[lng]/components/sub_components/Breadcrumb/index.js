import styles from './Breadcrumb.module.scss'
//import { useWindowSize } from "@uidotdev/usehooks";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';


const Breadcrumb = ({ breadcrumbItems = [] }, { lng }) => {
  //const { isTablet, isMobile } = useWindowSize();
  const { t } = useTranslation(lng, 'bread');
/*
  if (isMobile || isTablet) {
    const previousPath =
      breadcrumbItems.length > 1
        ? breadcrumbItems[breadcrumbItems.length - 2]?.path
        : '/';
    return (
      <div className={styles.container}>
        <div className={styles.goBackButton}>
          <Link
            href={previousPath}
            style={{ textDecoration: 'none' }}
            className={styles.backLink}
          >
            <span className={styles.backSymbol}>&lt;</span>
            <span className={styles.backText}>{t('back')}</span>
          </Link>
        </div>
      </div>
    );
  }
*/
  return (
    <nav aria-label="breadcrumb">
      <ul className={styles.breadcrumb}>
        {breadcrumbItems.map((item, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {index < breadcrumbItems.length - 1 ? (
              <Link href={item.path} className={styles.breadcrumbLink}>
                {item.name}
              </Link>
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;