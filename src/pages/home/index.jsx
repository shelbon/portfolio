import React from "react"
import useDeviceDetect from "../../utils/useDeviceDetect"
import {
  wrapper,
  wrapperAbout,
  section,
  section__container,
  section__containerAbout,
  sectionIntro,
  sectionProject,
  sectionContact,
  section__intro__details__container,
  section__title,
  section__titleIntro,
  section__titleProject,
  section__contact__title,
  section__about__title,
  section__titleBlack,
  section__titleWhite,
  section__subtitleProject,
  section__intro__link,
  section__about__body,
  section__contact__phone,
  button,
} from "../../styles/index.module.css"
import SEO from "../../components/seo"
import ProjectGallery from "../../components/Project/Gallery/Gallery"
import ContactForm from "../../components/UI/Contact/Form/Form"
import { graphql } from "gatsby"
import { useTranslation, Trans } from "react-i18next"
import { useLocalization, LocalizedLink as Link } from "gatsby-theme-i18n"
import Header from "../../components/header"
import Footer from "../../components/UI/Footer/Footer"
import "../../styles/layout.css"

export const query = graphql`
  {
    allFile(filter: { name: { regex: "/^CV[_\\\\-\\\\.]/" } }) {
      nodes {
        name
        publicURL
      }
    }
  }
`
const HomePage = ({ data, ...props }) => {
  const { locale } = useLocalization()
  const cvRegex = new RegExp(`[_ -]${locale}`, "gi")
  const pathNameRegex = new RegExp(`\\/`, "gmi")
  let cv = data.allFile.nodes.find(cv => cvRegex.test(cv.name))
  let { isMobile } = useDeviceDetect()
  const { t, i18n } = useTranslation(["home", "seo"])
  const pageName = props.pageContext.originalPath.replace(pathNameRegex, "")
  return (
    <>
      <div className={wrapper}>
        <SEO title={t("seo:title")} description={t("seo:description")} />
        <Header cv={cv} pageName={pageName} />
        <section id="home" className={sectionIntro}>
          <div className={section__intro__details__container}>
            <h1
              className={`${section__title} ${section__titleIntro} ${section__titleBlack}`}
            >
              <Trans i18nKey="intro" i18n={i18n} t={t}>
                Je suis Patrick Shéron MOUCLE <br />
                Développeur informatique.
              </Trans>
            </h1>
            <Link
              to={`/${pageName}#project`}
              className={`${section__intro__link} ${button}`}
            >
              <p>{t("intro.cta.work")}</p>
            </Link>
          </div>
        </section>
      </div>

      <section id="project" className={`${section} ${sectionProject} `}>
        <div className={section__container}>
          <h2 className={section__titleProject}>{t("section.work.title")}</h2>
          <p className={section__subtitleProject}>
            {t("section.work.subtitle")}
          </p>

          <ProjectGallery
            isMobile={isMobile}
            locale={locale}
            className={sectionProject}
          />
        </div>
      </section>
      <div className={wrapperAbout}>
        <section id="about" className={section}>
          <h2 className={` ${section__about__title} ${section__titleWhite} `}>
            {t("section.about.title")}
          </h2>
          <div className={section__containerAbout}>
            <div className={section__about__body}>
              <p>
                <strong>{t("section.about.body.emphasis")}</strong>{" "}
              </p>
              <p>{t("section.about.body.second.paragraph")}</p>

              {isMobile && (
                <a
                  href={cv.publicURL}
                  className={button}
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
        className={`${section}             
                                    ${sectionContact}`}
      >
        <h2 className={section__contact__title}>
          {t("section.contact.title")}
        </h2>
        <a className={section__contact__phone} href="tel:+596696182266">
          {t("contact.cta.phone")}
        </a>
        <ContactForm id="contact" />
      </section>
      <Footer />
    </>
  )
}
export default HomePage
