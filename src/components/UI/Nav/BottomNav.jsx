import briefcaseIcon from '@iconify/icons-la/briefcase';
import homeIcon from '@iconify/icons-la/home';
import smsIcon from '@iconify/icons-la/sms';
import userIcon from '@iconify/icons-la/user';
import { Icon } from '@iconify/react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  bottomNav,
  nav__link, nav__link__icon, nav__link__text
} from './bottomNav.module.css';

const BottomNav = ({ pageName }) => {
  const { t } = useTranslation('navigation');
  return (
    <nav id={bottomNav} aria-label="Main menu" aria-hidden="false">
      <LocalizedLink className={nav__link} to="/home">
        <Icon icon={homeIcon} className={nav__link__icon} />
        <p className={nav__link__text}>{t('home')}</p>
      </LocalizedLink>

      <LocalizedLink className={nav__link} to={`/${pageName}#about`}>
        <Icon icon={userIcon} className={nav__link__icon} />
        <p className={nav__link__text}>{t('about')}</p>
      </LocalizedLink>

      <LocalizedLink
        className={nav__link}
        to={`/${pageName}#project`}
      >
        <Icon icon={briefcaseIcon} className={nav__link__icon} />
        <p className={nav__link__text}>{t('work')}</p>
      </LocalizedLink>

      <LocalizedLink
        className={nav__link}
        to={`/${pageName}#contact`}
      >
        <Icon icon={smsIcon} className={nav__link__icon} />
        <p className={nav__link__text}>{t('contact')}</p>
      </LocalizedLink>
    </nav>
  );
};
export default BottomNav;
