import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { makeSpaceForNavigationByTagName } from '../../../utils/utils';
import { footer, text } from './Footer.module.css';

const Footer = ({ isMobile }) => {
  const { t } = useTranslation('home');
  useEffect(() => {
    makeSpaceForNavigationByTagName(
      isMobile,
      'footer',
      'margin-bottom',
      true,
    );
  }, [isMobile]);

  return (
    <footer>
      <p className={text}>
        © {new Date().getFullYear()} {t('footer')}
      </p>
    </footer>
  );
};
export default Footer;
