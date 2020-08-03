import React from "react"

import  "../styles/layout.css"
import IndexStyles from "../styles/index.module.css"
import SEO from "../components/seo"
import ProjectGallery from "../components/project-gallery"
import { Link } from "gatsby"
import ContactForm  from "../components/contact"
import DevIllustration from "../components/illustration/DevIllustration/index"
import Header from "../components/header"
import Footer from "../components/footer"
 
import aboutme from "../images/about_me.svg"

const IndexPage = ( ) => (
  <>
  <div className={IndexStyles.wrapper}>
    <SEO title="Home" />
       <Header/>
      <section
        id="home"
        className={IndexStyles.sectionIntro}
      >
        <div className={IndexStyles.section__intro__details__container}>
        <h1
          className={`${IndexStyles.section__title} ${IndexStyles.section__titleIntro} ${IndexStyles.section__titleBlack}`}
        >
            <strong>je créer les meilleur  site web et application mobile</strong>
            <br/> Je suis Patrick shéron moucle
             Développeur informatique
             
           
        </h1>
        <Link to="/#project" className={IndexStyles.section__intro__link}><p>Mes réalisations</p></Link>
        </div>
        <div className={IndexStyles.section__intro__illustration__container}>
        <DevIllustration/>
        </div>
        
      </section>
      </div>
       
      <section
        id="project"
        className={`${IndexStyles.section} ${IndexStyles.sectionProject} `}
      >
        <div className={IndexStyles.section__container}>
        <h2 className={IndexStyles.section__titleProject}>Réalisations</h2>
        <p className={IndexStyles.section__subtitleProject}>
        Voici des exemples de mes réalisations personnelles et professionnelles.
        </p>
         
        <ProjectGallery className={IndexStyles.sectionProject} />
        </div>
      </section>
      <div className={IndexStyles.wrapperAbout}>
      <section
        id="about"
        className={`${IndexStyles.section}             
                                    ${IndexStyles.sectionAbout}`}
      >
        
        <h2 className={` ${IndexStyles.section__about__title} ${IndexStyles.section__titleWhite} `}>&Agrave; propos</h2>
        <div className={IndexStyles.section__containerAbout}>
        <div className={IndexStyles.section__about__illustration__container}>
          <img src={aboutme}/>
          </div>
          <div className={IndexStyles.section__about__body}>
            <p><strong>Développeur informatique passionné</strong> dans le domaine du web et mobile.</p> 
            <p>Je conçois et realise des sites web et des application mobiles.</p>

          </div>
         
        </div>
      </section>
      </div>
      <section id="contact" className={`${IndexStyles.section}             
                                    ${IndexStyles.sectionContact}`}>
      <h2 className={IndexStyles.section__contactform__title}>Contact</h2>
      <ContactForm id="contact"/>
      </section>
      <Footer/>
      
  </>
)
export default IndexPage
