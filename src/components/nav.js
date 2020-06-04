import { Link } from "gatsby"
import PropTypes, { bool } from "prop-types"
import React from "react"
import navStyles from "./nav.module.css"
import { FaBars } from "react-icons/fa"
export default class Nav extends React.Component {
  componentDidMount() {
    this.init()
  }
  init() {
    const menu = document.querySelector(".js-menu");
    const menuButton = document.getElementById("js-nav-toggle");
    const navLinks=document.querySelectorAll(`.${navStyles.nav__link}`);
    console.log(navLinks);
    menuButton.addEventListener(
      "click",
      function () {
        menu.classList.toggle(navStyles.navOpen);
        if (menu.classList.contains(navStyles.navOpen)) {
          menu.setAttribute("aria-hidden", "false")
          menu.setAttribute("aria-expanded", "true")
        } else {
          menu.setAttribute("aria-hidden", "true")
          menu.setAttribute("aria-expanded", "false")
        }
      }
    );
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
          menu.classList.toggle(navStyles.navOpen);
      });
    });
  }
  render() {
    return (
      <nav
        id={navStyles.nav}
        aria-label="Main menu"
        aria-hidden="false"
        className="js-menu"
      >
        <div className={navStyles.nav__header}>
          <Link className={navStyles.nav__brand} to="/">
            Moucle patricksheron
          </Link>
          <button
            className={navStyles.navToggle}
            id="js-nav-toggle"
            type="button"
            aria-label="Menu"
            aria-controls="nav"
          >
            <FaBars className={navStyles.nav__hamburger} />
          </button>
        </div>
        <ul className={navStyles.nav__list}>
          <li className={navStyles.nav__item}>
            <Link   className={navStyles.nav__link} to="/#home" >
              Accueil
              </Link>
          </li>
          <li className={navStyles.nav__item}>
            <Link className={navStyles.nav__link} to="/#about" >
              About
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <Link className={navStyles.nav__link} to="/#project">
              Réalisation
            </Link>
          </li>
          <li className={navStyles.nav__item}>
            <Link className={navStyles.nav__link} to="/#contact" >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    )
  }
}
