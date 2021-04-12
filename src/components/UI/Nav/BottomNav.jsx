import React from "react"
import {
  nav,
  nav__list,
  nav__item,
  nav__link,
  nav__link__text,
  nav__link__icon,
  phone,
} from "./bottomNav.module.css"
import { FaHome, FaBriefcase, FaAddressCard, FaPhone } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"

const BottomNav = ({ pageName }) => {
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
            <FaHome className={nav__link__icon} />
            <p className={nav__link__text}>{t("home")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to={`/${pageName}#about`}>
            <FaAddressCard className={nav__link__icon} />
            <p className={nav__link__text}>{t("about")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to={`/${pageName}#project`}>
            <FaBriefcase className={nav__link__icon} />
            <p className={nav__link__text}>{t("work")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to={`/${pageName}#contact`}>
            <FaAddressCard className={nav__link__icon} />
            <p className={nav__link__text}>{t("contact")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item} id={phone}>
          <a className={nav__link} href="tel:+596696182266">
            <FaPhone className={nav__link__icon} />
            <p className={nav__link__text}>{t("phone")}</p>
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default BottomNav
