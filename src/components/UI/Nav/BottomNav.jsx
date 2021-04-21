import React from "react"
import {
  bottomNav,
  nav__list,
  nav__item,
  nav__link,
  nav__link__text,
  nav__link__icon,
} from "./bottomNav.module.css"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
import { Icon } from '@iconify/react';
import phoneIcon from '@iconify/icons-la/phone';
import homeIcon from '@iconify/icons-la/home';
import userIcon from '@iconify/icons-la/user';
import briefcaseIcon from '@iconify/icons-la/briefcase';
import smsIcon from '@iconify/icons-la/sms';

const BottomNav = ({ pageName }) => {
  const { t } = useTranslation("navigation")
  return (
    <nav
     id={bottomNav}
      aria-label="Main menu"
      aria-hidden="false"
      className="js-menu"
    >
      <ul className={nav__list}>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to="/home">
          <Icon icon={homeIcon} className={nav__link__icon}/>
            <p className={nav__link__text}>{t("home")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to={`/${pageName}#about`}>
          <Icon icon={userIcon} className={nav__link__icon}/>
            <p className={nav__link__text}>{t("about")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to={`/${pageName}#project`}>
          <Icon icon={briefcaseIcon} className={nav__link__icon}/>
            <p className={nav__link__text}>{t("work")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item}>
          <LocalizedLink className={nav__link} to={`/${pageName}#contact`}>
          <Icon icon={smsIcon} className={nav__link__icon}/>
            <p className={nav__link__text}>{t("contact")}</p>
          </LocalizedLink>
        </li>
        <li className={nav__item} >
          <a className={nav__link} href="tel:+596696182266">
            <Icon icon={phoneIcon} className={nav__link__icon}/>
            <p className={nav__link__text}>{t("phone")}</p>
          </a>
        </li>
      </ul>
    </nav>
  )
}
export default BottomNav
