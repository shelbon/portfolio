import AOS from "aos";
import "aos/dist/aos.css";
import { graphql } from "gatsby";
import React, { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";
import { ResizeObserver } from "resize-observer";
import rescaleCaptcha from "../../../static/js/rescaleCaptcha";
import Hero from "../../components/Hero/hero";
import Projects from "../../components/Project/Projects";
import SEO from "../../components/seo";
import ContactForm from "../../components/UI/Contact/Form/Form";
import Layout from "../../templates/layout";
import AppContext from "../../utils/context";
import {
  about,
  aboutBody,
  aboutParagraph,
  aboutTitle,
  button,
  contact,
  contactPhone,
  contactTitle,
  section,
  sectionProject,
  skewed,
  titleWhite,
} from "./index.module.css";

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
const HomePage = ({ data, ...props }) => {
  const pathNameRegex = new RegExp(`\\/`, "gmi");
  const { t } = useTranslation([
    "home",
    "seo",
    "projectItem",
    "projectDetails",
  ]);
  const pageName = props.pageContext.originalPath.replace(pathNameRegex, "");
  const heroData = {
    author: data.site.siteMetadata.author,
    locale: data.hero.fields.locale,
    ...data.hero.frontmatter,
    pageName,
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
      <AppContext.Consumer>
        {({ isMobile, cv }) => (
          <>
            <SEO title={t("seo:title")} description={t("seo:description")} />

            <Hero data={heroData} isMobile={isMobile} />
            <section id="project" className={` ${section} ${sectionProject}`}>
              <Projects data={data.projects.items} t={t} />
            </section>
            <section id="about" className={`${about} ${skewed}`}>
              <h2 className={` ${aboutTitle} ${titleWhite} `}>
                {t("section.about.title")}
              </h2>

              <div className={aboutBody}>
                <p className={aboutParagraph}>
                  <strong>{t("section.about.body.emphasis")}</strong>
                </p>
                <Trans
                  i18nKey="home:section.about.body.paragraphs"
                  components={{
                    strong: <strong />,
                    p: <p className={aboutParagraph} />,
                  }}
                />

                {isMobile && cv && (
                  <a
                    href={cv.publicURL}
                    className={button}
                    rel="noopener noreferrer"
                    target="_blank"
                    style={{ alignSelf: "center" }}
                  >
                    <p>{t("section.about.cta.cv")}</p>
                  </a>
                )}
              </div>
            </section>
          </>
        )}
      </AppContext.Consumer>
      <section
        id="contact"
        className={` section ${section}             
                                    ${contact} `}
      >
        <h2 className={contactTitle}>{t("section.contact.title")}</h2>
        <a className={contactPhone} href="tel:+596696182266" alt="phone number">
          {t("contact.cta.phone")}
        </a>
        <ContactForm id="contact" resizeObserver={resizeObserver} />
      </section>
    </Layout>
  );
};
export default HomePage;
