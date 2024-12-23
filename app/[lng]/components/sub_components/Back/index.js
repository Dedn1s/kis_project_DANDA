

import styles from './Back.module.scss'
import Link from 'next/link';
import { useTranslation } from 'next-i18next';



const Back = ({ breadcrumbItems = [] },{ lng }) => {
    const { t } = useTranslation(lng, 'bread');
    const { isTablet, isMobile } = useWindowSize();

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
              className={styles.goBackLink}
            >
              <span className={styles.goBackSymbol}>&lt;</span>
              <span className={styles.goBackText}>{t('back')}</span>
            </Link>
          </div>
        </div>
      );
    }
  
   
  export default Back;