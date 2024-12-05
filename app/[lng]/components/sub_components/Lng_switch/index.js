import Link from 'next/link'
import { Trans } from 'react-i18next/TransWithoutContext'
import { languages } from '../../../../i18n/setting'

import styles from "./lng_switch.module.scss"

export const Switcher = ({ t, lng }) => {
  return (
    <div>
      <Trans className={styles.text_lng} i18nKey="languageSwitcher" t={t}>
        {t('switcher')}{' '}
      </Trans>
      {languages.filter((l) => lng !== l).map((l, index) => {
        return (
          <span key={l}>
            {index > 0 && (' or ')}
            <Link className={styles.link_lng} href={`/${l}`}>
              {l}
            </Link>
          </span>
        )
      })}
    </div>
  )
}