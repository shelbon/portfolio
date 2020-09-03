import { Link,useStaticQuery } from "gatsby"
import React from "react"
import navStyles from "./Nav.module.css"
import { FaHome, FaBriefcase, FaAddressCard,FaPhone } from "react-icons/fa"


 const  Nav = ()=> {
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
            <Link className={navStyles.nav__link} to="/#home">
              <FaHome className={navStyles.nav__link__icon} />
              <p className={navStyles.nav__link__text}>Accueil</p>
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <Link className={navStyles.nav__link} to="/#about">
              <p className={navStyles.nav__link__text}>About</p>
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <Link className={navStyles.nav__link} to="/#project">
              <FaBriefcase className={navStyles.nav__link__icon} />
              <p className={navStyles.nav__link__text}>Réalisation</p>
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <Link className={navStyles.nav__link} to="/#contact">
              <FaAddressCard className={navStyles.nav__link__icon} />
              <p className={navStyles.nav__link__text}>Contact</p>
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <a className={navStyles.nav__link} href="tel:+596696182266">
              <FaPhone className={navStyles.nav__link__icon} />
              <p className={navStyles.nav__link__text} >appeler</p>
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