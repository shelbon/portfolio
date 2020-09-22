import React from "react"
import navStyles from "./Nav.module.css"
import {useStaticQuery } from "gatsby"
import { useTranslation } from "react-i18next"
import { FaHome, FaBriefcase, FaAddressCard,FaPhone } from "react-icons/fa"
import { LocalizedLink } from "../../LocalizedLink"
import { useLocalization } from "gatsby-theme-i18n"
 
 const  Nav = ()=> {
   const {locale}=useLocalization();
  const { t } = useTranslation("navigation");
  let cvs = useStaticQuery(graphql`
  {
    allFile(filter:{name:{regex:"/^CV-/"}}){
    nodes{
      name
      publicURL
    }
    }
  }
`); 
   let cv=cvs.allFile.nodes.find(cv=>cv.name.includes(`-${locale}`));
 
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
              <FaAddressCard className={navStyles.nav__link__icon}/>
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
          <li className={navStyles.nav__item} id={navStyles.phone}>
            <a className={navStyles.nav__link} href="tel:+596696182266">
              <FaPhone className={navStyles.nav__link__icon} />
              <p className={navStyles.nav__link__text} >{t('phone')}</p>
            </a>
          </li>
          { cv &&(<li className={navStyles.nav__item}>
            <a className={navStyles.nav__link}  rel="noopener noreferrer" target="_blank" href={cv.publicURL}>
              <p className={navStyles.nav__link__text}>CV</p>
            </a>
          </li>)}
        </ul>
      </nav>
    )
    }
    export default Nav;
 