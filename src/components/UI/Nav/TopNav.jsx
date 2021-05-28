import React from 'react';
import {
  topNav,
  nav__link,
  nav__link__text,
} from './topNav.module.css';
import { useTranslation } from 'react-i18next';
import { LocalizedLink } from 'gatsby-theme-i18n';
const TopNav = ({ pageName }) => {
  const { t } = useTranslation('navigation');
  return (
    <nav
      id={topNav}
      aria-label="Main menu"
      aria-hidden="false"
      className="js-menu"
    >
      <LocalizedLink className={nav__link} to="/home">
        <p className={nav__link__text}>{t('home')}</p>
      </LocalizedLink>

      <LocalizedLink className={nav__link} to={`/${pageName}#about`}>
        <p className={nav__link__text}>{t('about')}</p>
      </LocalizedLink>
      <LocalizedLink
        className={nav__link}
        to={`/${pageName}#project`}
      >
        <p className={nav__link__text}>{t('work')}</p>
      </LocalizedLink>
      <LocalizedLink
        className={nav__link}
        to={`/${pageName}#contact`}
      >
        <p className={nav__link__text}>{t('contact')}</p>
      </LocalizedLink>
    </nav>
  );
};
export default TopNav;
