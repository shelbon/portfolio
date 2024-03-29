import { graphql } from "gatsby";
import React from "react";
import { Trans, useTranslation } from "react-i18next";
import Hero from "../../components/Hero/hero";
import Projects from "../../components/Project/Projects";
import SEO from "../../components/seo";
import ContactForm from "../../components/UI/Contact/Form/Form";
import SkillList from "../../components/UI/SkillList";
import Layout from "../../templates/layout";
import AppContext from "../../utils/context";
import {
  about,
  aboutMe,
  aboutSkills,
  aboutTitle,
  button,
  contact,
  contactPhone,
  contactTitle,
  section,
  sectionProject,
  titleWhite,
} from "./index.module.css";

export const query = graphql`
  query Home($locale: String) {
    hero: mdx(
      fileAbsolutePath: { regex: "/content/hero/" }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        introduction
        role
        ctaLabel
      }
      body
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
    author: t("home:author"),
    hero: {
      ...data.hero.frontmatter,
      body: data.hero.body,
    },
    pageName,
  };

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
            <section id="about" className={`${about}`}>
              <h2 className={` ${aboutTitle} ${titleWhite} `}>
                {t("section.about.title")}
              </h2>
              <div className={aboutSkills}>
                <h3>{t("section.about.skills")}</h3>
                <SkillList
                  languages={[
                    "javascript",
                    "html5",
                    "css3",
                    "svelte",
                    "react",
                    "vuejs",
                    "android",
                    "kotlin",
                    "java",
                    "git",
                    "nodejs",
                    "fastify",
                    "graphql",
                    "mysql",
                  ]}
                />
              </div>
              <div className={aboutMe}>
                <Trans
                  i18nKey="home:section.about.me"
                  components={{
                    strong: <strong />,
                    p: <p />,
                  }}
                />

                {cv && (
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
        <a className={contactPhone} href="tel:+33675920852" alt="phone number">
          {t("contact.cta.phone")}
        </a>
        <ContactForm id="contact" />
      </section>
    </Layout>
  );
};
export default HomePage;