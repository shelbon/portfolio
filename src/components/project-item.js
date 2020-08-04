import React from "react"
import Image from "gatsby-image"
import {Link} from "gatsby"

import ProjectItemStyles from "../styles/project-item.module.css"

const projectItem = (props)=>{
    return(
       
      <div className={ProjectItemStyles.portfolio__item__container}
      >
                <article
                 
                  className={ProjectItemStyles.portfolio__item}
                   
                  onMouseEnter={()=>props.onMouseEnter()}
                   
                  onClick={() => {
                    props.onClick();
                     
                  }}
                >
                  <Image
                    fluid={props.project.image.thumbnail.fluid}
                    
                    alt={`project ${props.project.title} thumbnail`}
                    className={
                      ProjectItemStyles.portfolio__item__img__container
                    }
                  />
                  
                </article>
                <div
                 
                onMouseLeave={() => {
                  props.onMouseLeave()
                }}
                className={ProjectItemStyles.portfolio__item__overlay}
                data-overlay-id={props.project.id}
                 
              >
                <div
                  className={
                    ProjectItemStyles.portfolio__item__overlay__header
                  }
                  
                >
                  <h1
                    className={
                      ProjectItemStyles.portfolio__item__overlay__header__title
                    }
                  >
                    {props.project.title}
                  </h1>
                  <p
                    className={
                      ProjectItemStyles.portfolio__item__overlay__header__skills
                    }
                  >
                    skills/skills
                  </p>
                </div>
                <div
                  className={
                    ProjectItemStyles.portfolio__item__overlay__cta
                  }
                >
                  {props.project.sourceCode &&(<a href={props.project.sourceCode}
                    target="_blank"
                    className={
                      ProjectItemStyles.portfolio__item__overlay__cta__code_source
                    }
                  >
                    code source
                  </a>)}
                  <Link
                    to={props.project.slug}
                    className={
                      ProjectItemStyles.portfolio__item__overlay__cta__link
                    }
                  >
                    plus d'info
                  </Link>
                </div>
              </div>
              </div>
    );
}
export default projectItem;