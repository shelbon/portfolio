import React from "react"

import Layout from "../components/layout"
import IndexStyles from "../components/index.module.css"
import SEO from "../components/seo"
import ProjectGallery from "../components/project-gallery.js"
import { Link } from "gatsby"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <section
        id="home"
        className={`${IndexStyles.section}
                                     ${IndexStyles.sectionIntro}
                                    ${IndexStyles.section__bgSilverSand}`}
      >
        <h1
          className={`${IndexStyles.section__title} ${IndexStyles.section__titleIntro} ${IndexStyles.section__titleBlack}`}
        >
          <p>Je suis<strong>Patrick shéron moucle
             Développeur informatique</strong></p>
           
        </h1>
        <Link to="/#project" className={IndexStyles.section_intro__link}><p>mes réalisations</p></Link>
      </section>

      <section
        id="about"
        className={`${IndexStyles.section}
                                    ${IndexStyles.section__bgOxfordBlueAbout}
                                    ${IndexStyles.sectionAbout}`}
      >
        <div className={IndexStyles.section__container}>
          <h2 className={` ${IndexStyles.section__about__title} ${IndexStyles.section__titleWhite} `}>&Agrave; propos</h2>
          <p className={IndexStyles.section__about__body}>
            Développeur informatique passionné dans le domaine du web et mobile.
            Je conçois et realise des sites web et des application mobiles.
          </p>
        </div>
      </section>
      <section
        id="project"
        className={`${IndexStyles.section__bgOxfordBlueProject} ${IndexStyles.section} ${IndexStyles.sectionProject}`}
      >
        <div className={IndexStyles.section__container}>
        <h2 className={IndexStyles.section__titleProject}>My work</h2>
        <p className={IndexStyles.section__subtitleProject}>
          A selection of my range of work
        </p>
        <ProjectGallery />
        </div>
      </section>
      <section id="contact" className={IndexStyles.section__bgSilverSand}>
        <p>about</p>
      </section>
    </div>
 
  </Layout>
)
export default IndexPage
