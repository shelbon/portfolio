import { Link,useStaticQuery } from "gatsby"
import PropTypes, { bool } from "prop-types"
import React from "react"
import navStyles from "../styles/nav.module.css"
import { FaHome, FaBriefcase, FaAddressCard } from "react-icons/fa"


 const  Nav = ()=> {
  let cv = useStaticQuery(graphql`
  {
    file(name: {regex: "/\\\\CV/"}) {
    publicURL
    }
  }
`);
 console.log(cv);
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
              <p>Accueil</p>
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <Link className={navStyles.nav__link} to="/#about">
              <p>About</p>
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <Link className={navStyles.nav__link} to="/#project">
              <FaBriefcase className={navStyles.nav__link__icon} />
              <p>Réalisation</p>
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <Link className={navStyles.nav__link} to="/#contact">
              <FaAddressCard className={navStyles.nav__link__icon} />
              <p>Contact</p>
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <a className={navStyles.nav__link} href={cv.file.publicURL}>
              <p>CV</p>
            </a>
          </li>
        </ul>
      </nav>
    )
    }
    export default Nav;