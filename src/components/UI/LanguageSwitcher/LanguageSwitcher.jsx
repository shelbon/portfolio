import React from "react"
import { useLocalization } from "gatsby-theme-i18n"
import { useTranslation, withTranslation } from "react-i18next"
const LanguageSwitcher = ({ i18n }) => {
  const { config } = useLocalization()
  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <span>
      {config.map(locale => {
        return (
          <button
            lang={locale.code}
            className=""
            onClick={() => changeLanguage(locale.code)}
          >
            {locale.name}
          </button>
        )
      })}
    </span>
  )
}
export default withTranslation()(LanguageSwitcher)
