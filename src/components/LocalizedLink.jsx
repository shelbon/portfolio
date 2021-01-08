import { useLocalization } from "gatsby-theme-i18n"
import { localizedPath } from "gatsby-theme-i18n/src/helpers"
import * as React from "react"

export const LocalizedLink = ({ to, language, ...props }) => {
    const { defaultLang, locale } = useLocalization()
    const linkLocale = language || locale
  return <a className={props.className} href={localizedPath(defaultLang, linkLocale, to)}>{props.children}</a>
  }