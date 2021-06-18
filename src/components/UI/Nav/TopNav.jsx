import { LocalizedLink } from 'gatsby-theme-i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  nav__link,
  nav__link__text,
  topNav
} from './topNav.module.css';

const TopNav = ({ cv, pageName }) => {
  const { t } = useTranslation('navigation');
  return (
    <nav id={topNav} aria-hidden="false">
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
      {cv && (
        <a
          className={nav__link}
          rel="noopener noreferrer"
          target="_blank"
          href={cv.publicURL}
        >
          <p className={nav__link__text}>{t('resume')}</p>
        </a>
      )}
    </nav>
  );
};
export default TopNav;
