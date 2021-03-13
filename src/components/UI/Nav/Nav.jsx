import React from "react"
import {
  nav,
  nav__list,
  nav__item,
  nav__link,
  nav__link__icon,
  nav__link__text,
  phone
} from "./Nav.module.css"
import { useTranslation } from "react-i18next"
import { FaHome, FaBriefcase, FaAddressCard, FaPhone } from "react-icons/fa"
import { LocalizedLink  } from "gatsby-theme-i18n"

const Nav = ({ cv }) => {
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
          <LocalizedLink className={nav__link} to="#home">
            <FaHome className={nav__link__icon} />
            <p className={nav__link__text}>{t("home")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to="/#about">
            <FaAddressCard className={nav__link__icon} />
            <p className={nav__link__text}>{t("about")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to="/#project">
            <FaBriefcase className={nav__link__icon} />
            <p className={nav__link__text}>{t("work")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to="/#contact">
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
        {cv && (
          <li className={nav__item}>
            <a
              className={nav__link}
              rel="noopener noreferrer"
              target="_blank"
              href={cv.publicURL}
            >
              <p className={nav__link__text}>{t("resume")}</p>
            </a>
          </li>
        )}
      </ul>
    </nav>
  )
}
export default Nav
