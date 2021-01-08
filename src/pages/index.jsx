import React from "react"
import aboutme from "../images/about_me.svg"
import useDeviceDetect from "../utils/useDeviceDetect"
import IndexStyles from "../styles/index.module.css"
import SEO from "../components/seo"
import ProjectGallery from "../components/Project/Gallery/Gallery"
import ContactForm from "../components/UI/Contact/Form/Form"
import { LocalizedLink } from "../components/LocalizedLink"
import {  graphql } from "gatsby"
import {  useTranslation,Trans} from "react-i18next"
import { useLocalization } from "gatsby-theme-i18n"
import DevIllustration from "../images/dev.svg"
import Header from "../components/header"
import Footer from "../components/UI/Footer/Footer"
import "../styles/layout.css"
import "normalize.css"

export const query = graphql`{
   allFile(filter:{name:{regex:"/^CV-/"}}){
    nodes{
      name
      publicURL
    }
    }
  }
`
const IndexPage = ({data}) => {
  const { locale} = useLocalization();
  let cv=data.allFile.nodes.find(cv=>cv.name.includes(`-${locale}`));
  let { isMobile } = useDeviceDetect();
  const { t ,i18n} = useTranslation(["home","seo"]);
  
  return(
    <>
      <div className={IndexStyles.wrapper}>
        <SEO title={t("seo:title")} description={t("seo:description")} />
        <Header cv={cv}/>
        <section id="home" className={IndexStyles.sectionIntro}>
          <div className={IndexStyles.section__intro__details__container}>
            <h1
              className={`${IndexStyles.section__title} ${IndexStyles.section__titleIntro} ${IndexStyles.section__titleBlack}`}
            >
                <Trans
                i18nKey="intro"
                i18n={i18n}
                t={t}
                >
Je suis Patrick Shéron MOUCLE <br/>Développeur informatique.
                  </Trans>
            </h1>
            <LocalizedLink
              to="/#project"
              className={`${IndexStyles.section__intro__link} ${IndexStyles.button}`}
            >
              <p>{t("intro.cta.work")}</p>
            </LocalizedLink>
          </div>
          <div className={IndexStyles.section__intro__illustration__container}>
            <img src={DevIllustration} alt="intro illustration" />
          </div>
        </section>
      </div>

      <section
        id="project"
        className={`${IndexStyles.section} ${IndexStyles.sectionProject} `}
      >
        <div className={IndexStyles.section__container}>
          <h2 className={IndexStyles.section__titleProject}>
            {t("section.work.title")}
          </h2>
          <p className={IndexStyles.section__subtitleProject}>
            {t("section.work.subtitle")}
          </p>

          <ProjectGallery
            isMobile={isMobile}
            locale={locale}
            className={IndexStyles.sectionProject}
          />
        </div>
      </section>
      <div className={IndexStyles.wrapperAbout}>
        <section
          id="about"
          className={`${IndexStyles.section}             
                                     ${IndexStyles.sectionAbout}`}
        >
          <h2
            className={` ${IndexStyles.section__about__title} ${IndexStyles.section__titleWhite} `}
          >
            {t("section.about.title")}
          </h2>
          <div className={IndexStyles.section__containerAbout}>
            <div
              className={IndexStyles.section__about__illustration__container}
            >
              <img src={aboutme} alt="illustration about me" />
            </div>
            <div className={IndexStyles.section__about__body}>
              <p>
                <strong>{t("section.about.body.emphasis")}</strong>{" "}
 
              </p>
              <p>{t("section.about.body.second.paragraph")}</p>

              {isMobile && (
                <a
                  href={cv.publicURL}
                  className={IndexStyles.button}
                  style={{ alignSelf: "center" }}
                >
                  <p>{t("section.about.cta.cv")}</p>
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
      <section
        id="contact"
        className={`${IndexStyles.section}             
                                    ${IndexStyles.sectionContact}`}
      >
        <h2 className={IndexStyles.section__contact__title}>
          {t("section.contact.title")}
        </h2>
        <a
          className={IndexStyles.section__contact__phone}
          href="tel:+596696182266"
        >
          {t("contact.cta.phone")}
        </a>
        <ContactForm id="contact" />
      </section>
      <Footer  />
    </>
  )
}
export default IndexPage
