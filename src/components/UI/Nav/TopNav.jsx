import { LocalizedLink } from 'gatsby-theme-i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { link, linkText, topNav } from './topNav.module.css';

const TopNav = ({ cv, pageName }) => {
  const { t } = useTranslation('navigation');
  return (
    <nav id={topNav} aria-hidden="false">
      <LocalizedLink className={link} to="/home">
        <p className={linkText}>{t('home')}</p>
      </LocalizedLink>

      <LocalizedLink className={link} to={`/${pageName}#about`}>
        <p className={linkText}>{t('about')}</p>
      </LocalizedLink>
      <LocalizedLink className={link} to={`/${pageName}#project`}>
        <p className={linkText}>{t('work')}</p>
      </LocalizedLink>
      <LocalizedLink className={link} to={`/${pageName}#contact`}>
        <p className={linkText}>{t('contact')}</p>
      </LocalizedLink>
      {cv && (
        <a
          className={link}
          rel="noopener noreferrer"
          target="_blank"
          href={cv.publicURL}
        >
          <p className={linkText}>{t('resume')}</p>
        </a>
      )}
    </nav>
  );
};
export default TopNav;
