import React from 'react';
import { footer, footer__details } from './Footer.module.css';
import { useTranslation } from 'react-i18next';

const Footer = ({ isMobile }) => {
  const { t } = useTranslation('home');
  if (isMobile) {
    let footer = document.getElementsByTagName('footer')[0];
    footer.style.marginBottom = 'var(--nav-height)';
  }
  return (
    <footer>
      <div className={footer__details}>
        © {new Date().getFullYear()} {t('footer')}
      </div>
    </footer>
  );
};
export default Footer;
