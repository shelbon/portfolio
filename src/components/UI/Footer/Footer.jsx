import React,{useEffect}  from 'react';
import { footer, footer__details } from './Footer.module.css';
import { useTranslation } from 'react-i18next';
import { makeSpaceForNavigationByTagName } from '../../../utils/utils';
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
      <div className={footer__details}>
        © {new Date().getFullYear()} {t('footer')}
      </div>
    </footer>
  );
};
export default Footer;
