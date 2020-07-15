import React from "react"

import Layout from "../components/layout"
import IndexStyles from "../styles/index.module.css"
import SEO from "../components/seo"
import ProjectGallery from "../components/project-gallery"
import { Link } from "gatsby"
import ContactForm  from "../components/contact"


const IndexPage = ( ) => (
  <Layout>
    <SEO title="Home" />
    <div>
       
      <section
        id="home"
        className={`${IndexStyles.section}
                                     ${IndexStyles.sectionIntro} ${IndexStyles.section__bgSilverSand}`}
      >
        <h1
          className={`${IndexStyles.section__title} ${IndexStyles.section__titleIntro} ${IndexStyles.section__titleBlack}`}
        >
          <p>
            <strong>je créer les meilleur  site web et application mobile</strong>
            Je suis Patrick shéron moucle
             Développeur informatique</p>
           
        </h1>
        <Link to="/#project" className={IndexStyles.section__intro__link}><p>mes réalisations</p></Link>
      </section>
      <section
        id="project"
        className={`${IndexStyles.section} ${IndexStyles.sectionProject}`}
      >
        <div className={IndexStyles.section__container}>
        <h2 className={IndexStyles.section__titleProject}>Réalisations</h2>
        <p className={IndexStyles.section__subtitleProject}>
        Voici des exemples de mes réalisations personnelles et professionnelles.
        </p>
         
        <ProjectGallery className={IndexStyles.sectionProject} />
        </div>
      </section>
      <section
        id="about"
        className={`${IndexStyles.section}             
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
     
      <ContactForm id="contact"/>
    </div>
  <script src="./test.js" />
  </Layout>
)
export default IndexPage
