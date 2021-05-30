import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import { useTranslation, Trans } from 'react-i18next';
import {
  useLocalization,
  LocalizedLink as Link,
} from 'gatsby-theme-i18n';
import '../../styles/layout.css';
import 'aos/dist/aos.css';
import {
  jsScroll,
  section,
  sectionIntro,
  sectionProject,
  sectionContact,
  sectionAbout,
  section__container,
  section__intro__details__container,
  section__title,
  section__titleIntro,
  section__titleProject,
  section__contact__title,
  section__about__title,
  section__about__paragraph,
  section__titleBlack,
  section__titleWhite,
  section__intro__link,
  section__about__body,
  section__contact__phone,
  skewed,
  button,
} from './index.module.css';
import useDeviceDetect from '../../utils/useDeviceDetect';
import SEO from '../../components/seo';
import Nav from '../../components/UI/Nav/Nav';
import ProjectGallery from '../../components/Project/Gallery/Gallery';
import ContactForm from '../../components/UI/Contact/Form/Form';
import Footer from '../../components/UI/Footer/Footer';
import { ResizeObserver } from 'resize-observer';
import rescaleCaptcha from '../../../static/js/rescaleCaptcha';
import AppContext from '../../utils/context';
import AOS from 'aos';

export const query = graphql`
  {
    allFile(filter: { name: { regex: "/^CV[_\\\\-\\\\.]/" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`;

const HomePage = ({ data, ...props }) => {
  const { locale } = useLocalization();
  const cvRegex = new RegExp(`[_ -]${locale}`, 'gi');
  const pathNameRegex = new RegExp(`\\/`, 'gmi');
  const cv = data.allFile.nodes.find((cv) => cvRegex.test(cv.name));
  const { isMobile } = useDeviceDetect();
  const { t } = useTranslation(['home', 'seo']);
  const pageName = props.pageContext.originalPath.replace(
    pathNameRegex,
    '',
  );
  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      if (entry.target.children.length > 0) {
        rescaleCaptcha(entry.target, entry.target.children[0]);
      }
    }
  });

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <>
      <AppContext.Provider value={{ resizeObserver: resizeObserver }}>
        <Nav isMobile={isMobile} pageName={pageName} />
        <SEO
          title={t('seo:title')}
          description={t('seo:description')}
        />
        <section id="home" className={`${sectionIntro}`}>
          <div className={`${section__intro__details__container}`}>
            <h1
              className={`${section__title} 
              ${section__titleIntro} 
              ${section__titleBlack}`}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in"
            >
              {t('home:intro')}
              {t('home:intro.headline').toUpperCase()}
            </h1>

            <Link
              to={`/${pageName}#project`}
              className={`${section__intro__link} ${button}`}
              data-aos="fade-down"
              data-aos-duration="600"
              data-aos-easing="ease-in"
              data-aos-delay="400"
              data-aos-anchor={`.${section__title}`}
            >
              <p>{t('intro.cta.work')}</p>
            </Link>
          </div>
        </section>
        <section
          id="project"
          className={`${section} ${sectionProject}`}
        >
          <div className={`${section__container}`}>
            <h2 className={section__titleProject}>
              {t('section.work.title')}
            </h2>

            <ProjectGallery
              isMobile={isMobile}
              locale={locale}
              className={sectionProject}
            />
          </div>
        </section>
        <section id="about" className={`${sectionAbout} ${skewed}`}>
          <h2
            className={` ${section__about__title} ${section__titleWhite} `}
          >
            {t('section.about.title')}
          </h2>
          <div className={section__about__body}>
            <p className={section__about__paragraph}>
              <strong>{t('section.about.body.emphasis')}</strong>{' '}
            </p>
            <Trans
              i18nKey="home:section.about.body.paragraphs"
              components={{
                strong: <strong />,
                p: <p className={section__about__paragraph}></p>,
              }}
            />
            {isMobile && (
              <a
                href={cv.publicURL}
                className={button}
                rel="noopener noreferrer"
                target="_blank"
                style={{ alignSelf: 'center' }}
              >
                <p>{t('section.about.cta.cv')}</p>
              </a>
            )}
          </div>
        </section>
        <section
          id="contact"
          className={`${section}             
                                    ${sectionContact}  ${jsScroll}`}
        >
          <h2 className={section__contact__title}>
            {t('section.contact.title')}
          </h2>
          <a
            className={section__contact__phone}
            href="tel:+596696182266"
          >
            {t('contact.cta.phone')}
          </a>
          <ContactForm id="contact" />
        </section>
        <Footer isMobile={isMobile} />
      </AppContext.Provider>
    </>
  );
};
export default HomePage;
