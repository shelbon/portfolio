import AOS from 'aos';
import 'aos/dist/aos.css';
import { graphql } from 'gatsby';
import React, { useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { ResizeObserver } from 'resize-observer';
import rescaleCaptcha from '../../../static/js/rescaleCaptcha';
import Hero from '../../components/Hero/hero';
import Projects from '../../components/Project/Projects';
import SEO from '../../components/seo';
import ContactForm from '../../components/UI/Contact/Form/Form';
import Footer from '../../components/UI/Footer/Footer';
import Layout from '../../templates/layout';
import AppContext from '../../utils/context';
import {
  button,
  section,
  sectionAbout,
  sectionContact,
  sectionProject,
  section__about__body,
  section__about__paragraph,
  section__about__title,
  section__contact__phone,
  section__contact__title,
  section__container,
  section__titleProject,
  section__titleWhite,
  skewed
} from './index.module.css';

export const query = graphql`
  query Home($locale: String) {
    site {
      siteMetadata {
        author
      }
    }
    hero: mdx(
      fileAbsolutePath: { regex: "/content/hero/" }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        introduction
        tagline
        cta_label
      }
      fields {
        locale
      }
    }
    projects: allProject(
      sort: { fields: title, order: ASC }
      filter: { locale: { eq: $locale } }
    ) {
      items: nodes {
        ...ProjectFragment
      }
    }
  }
`;
const HomePage = ({ data, isMobile, cv, ...props }) => {
  const pathNameRegex = new RegExp(`\\/`, 'gmi');
  const { t } = useTranslation(['home', 'seo', 'projectItem']);
  const pageName = props.pageContext.originalPath.replace(
    pathNameRegex,
    '',
  );
  const heroData = {
    author: data.site.siteMetadata.author,
    locale: data.hero.fields.locale,
    ...data.hero.frontmatter,
    pageName,
    isMobile,
  };
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
    <Layout pageName={pageName}>
      <AppContext.Provider value={{ resizeObserver }}>
        <SEO
          title={t('seo:title')}
          description={t('seo:description')}
        />

        <Hero data={heroData} />
        <section
          id="project"
          className={` ${section} ${sectionProject}`}
        >
          <Projects data={data.projects.items} t={t} />
        </section>
        <section id="about" className={`${sectionAbout} ${skewed}`}>
          <h2
            className={` ${section__about__title} ${section__titleWhite} `}
          >
            {t('section.about.title')}
          </h2>
          <div className={section__about__body}>
            <p className={section__about__paragraph}>
              <strong>{t('section.about.body.emphasis')}</strong>
            </p>
            <Trans
              i18nKey="home:section.about.body.paragraphs"
              components={{
                strong: <strong />,
                p: <p className={section__about__paragraph} />,
              }}
            />
            {isMobile && cv && (
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
          className={` section ${section}             
                                    ${sectionContact} `}
        >
          <h2 className={section__contact__title}>
            {t('section.contact.title')}
          </h2>
          <a
            className={section__contact__phone}
            href="tel:+596696182266"
            alt="phone number"
          >
            {t('contact.cta.phone')}
          </a>
          <ContactForm id="contact" />
        </section>
      </AppContext.Provider>
    </Layout>
  );
};
export default HomePage;
