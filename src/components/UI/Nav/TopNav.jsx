import React from "react"
import {
  nav,
  nav__list,
  nav__item,
  nav__link,
  nav__link__text,
  phone,
} from "./topNav.module.css"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"

const TopNav = ({ pageName }) => {
  const { t } = useTranslation("navigation")
  return (
  <nav
      id={nav}
      aria-label="Main menu"
      aria-hidden="false"
      className="js-menu"
    >
      <ul className={nav__list}>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to="/home">
            <p className={nav__link__text}>{t("home")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to={`/${pageName}#about`}>
            <p className={nav__link__text}>{t("about")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to={`/${pageName}#project`}>
            <p className={nav__link__text}>{t("work")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to={`/${pageName}#contact`}>
            <p className={nav__link__text}>{t("contact")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item} id={phone}>
          <a className={nav__link} href="tel:+596696182266">
            <p className={nav__link__text}>{t("phone")}</p>
          </a>
        </li>
      </ul>
    </nav>
    )
}
export default TopNav
