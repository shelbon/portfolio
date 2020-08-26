import React,{useState} from "react"
import Image from "gatsby-image"
import {Link} from "gatsby"

import ProjectItemStyles from "../styles/project-item.module.css"
import DetailsProject from "./detailsProject"
const ProjectItem = (props)=>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
                 { props.project.images &&( <Image
                    fluid={props.project.images[0].thumb.fluid}
                    
                    alt={`project ${props.project.title} thumbnail`}
                    className={
                      ProjectItemStyles.portfolio__item__img__container
                    }
                  />)}
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
                  { props.project.technologies && (<p
                    className={
                      ProjectItemStyles.portfolio__item__overlay__header__skills
                    }
                  >
                   { props.project.technologies.length > 1 ? `${props.project.technologies[0]}/${props.project.technologies[1]}` :props.project.technologies[0]}
                  </p>)
                  }
                </div>
                <div
                  className={
                    ProjectItemStyles.portfolio__item__overlay__cta
                  }
                >
                  {props.project.sourceCode &&(<a href={props.project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      ProjectItemStyles.portfolio__item__overlay__cta__code_source
                    }
                  >
                    code source
                  </a>)}
                  <button
                    onClick={handleClickOpen}
                    className={
                      ProjectItemStyles.portfolio__item__overlay__cta__link
                    }
                  >
                    plus d'info
                  </button>
                  {open && (<DetailsProject  {...props.project} onClose={handleClose} open={open}/>)}
                </div>
              </div>
              </div>
    );
}
export default ProjectItem;