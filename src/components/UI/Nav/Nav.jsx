import React from "react"
import navStyles from "./Nav.module.css"
import { Link,useStaticQuery } from "gatsby"
import { useTranslation } from "react-i18next"
import { FaHome, FaBriefcase, FaAddressCard,FaPhone } from "react-icons/fa"
import { LocalizedLink } from "gatsby-theme-i18n"
 const  Nav = ()=> {
  const { t } = useTranslation("navigation");
  let cv = useStaticQuery(graphql`
  {
    file(name: {regex: "/\\\\CV/"}) {
    publicURL
    }
  }
`); 
    return (
      <nav
        id={navStyles.nav}
        aria-label="Main menu"
        aria-hidden="false"
        className="js-menu"
      >
        <ul className={navStyles.nav__list}>
          <li className={navStyles.nav__item}>
            <LocalizedLink className={navStyles.nav__link} to="/#home">
              <FaHome className={navStyles.nav__link__icon} />
              <p className={navStyles.nav__link__text}>{t('home')}</p>
            </LocalizedLink>
          </li>
          <li className={navStyles.nav__item}>
            <LocalizedLink className={navStyles.nav__link} to="/#about">
              <p className={navStyles.nav__link__text}>{t('about')}</p>
            </LocalizedLink>
          </li>
          <li className={navStyles.nav__item}>
            <LocalizedLink className={navStyles.nav__link} to="/#project">
              <FaBriefcase className={navStyles.nav__link__icon} />
              <p className={navStyles.nav__link__text}>{t('work')}</p>
            </LocalizedLink>
          </li>
          <li className={navStyles.nav__item}>
            <LocalizedLink className={navStyles.nav__link} to="/#contact">
              <FaAddressCard className={navStyles.nav__link__icon} />
              <p className={navStyles.nav__link__text}>{t('contact')}</p>
            </LocalizedLink>
          </li>
          <li className={navStyles.nav__item}>
            <a className={navStyles.nav__link} href="tel:+596696182266">
              <FaPhone className={navStyles.nav__link__icon} />
              <p className={navStyles.nav__link__text} >{t('phone')}</p>
            </a>
          </li>
          <li className={navStyles.nav__item}>
            <a className={navStyles.nav__link} href={cv.file.publicURL}>
              <p className={navStyles.nav__link__text}>CV</p>
            </a>
          </li>
        </ul>
      </nav>
    )
    }
    export default Nav;