import React from "react"

import  "../styles/layout.css"
import IndexStyles from "../styles/index.module.css"
import SEO from "../components/seo"
import ProjectGallery from "../components/project-gallery"
import { Link } from "gatsby"
import ContactForm  from "../components/contact"
import DevIllustration from "../images/dev.svg"
import Header from "../components/header"
import Footer from "../components/footer"
 
import aboutme from "../images/about_me.svg"
import useDeviceDetect from "../utils/useDeviceDetect";

const IndexPage = ( ) => {
  const { isMobile } = useDeviceDetect();
 return( <>
  <div className={IndexStyles.wrapper}>
    <SEO title="Home" />
       <Header isMobile={isMobile} />
 
      <section
        id="home"
        className={IndexStyles.sectionIntro}
      >
        <div className={IndexStyles.section__intro__details__container}>
        <h1
          className={`${IndexStyles.section__title} ${IndexStyles.section__titleIntro} ${IndexStyles.section__titleBlack}`}
        >
            <br/> Je suis Patrick Shéron MOUCLE
             Développeur informatique
             
           
        </h1>
        <Link to="/#project" className={IndexStyles.section__intro__link}><p>Mes réalisations</p></Link>
        </div>
        <div className={IndexStyles.section__intro__illustration__container}>
        <img   src={DevIllustration}alt="intro illustration"/>
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
         
        <ProjectGallery isMobile={isMobile}
         className={IndexStyles.sectionProject} />
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
          <img src={aboutme} alt="illustration about me"/>
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
      
  </>)
}
export default IndexPage
