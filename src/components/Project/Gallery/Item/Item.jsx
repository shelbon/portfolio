import React from "react"
import Image from "gatsby-image"
import ProjectGalleryItemStyles from "./Item.module.css"
import DetailsProject from "../../Details/Details"
const ProjectGalleryItem = (props)=>{
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return(
       
      <div className={ProjectGalleryItemStyles.portfolio__item__container}
      >
                <article
                 
                  className={ProjectGalleryItemStyles.portfolio__item}
                   
                  onMouseEnter={()=>props.onMouseEnter()}
                   
                  onClick={() => {
                    props.onClick();
                     
                  }}
                >
                 { props.project.images &&( <Image
                    fluid={props.project.coverImage.thumb.fluid}
                    
                    alt={`project ${props.project.title} thumbnail`}
                    className={
                      ProjectGalleryItemStyles.portfolio__item__img__container
                    }
                  />)}
                </article>
                <div
                 
                onMouseLeave={() => {
                  props.onMouseLeave()
                }}
                className={ProjectGalleryItemStyles.portfolio__item__overlay}
                data-overlay-id={props.project.id}
                 
              >
                <div
                  className={
                    ProjectGalleryItemStyles.portfolio__item__overlay__header
                  }
                  
                >
                  <h1
                    className={
                      ProjectGalleryItemStyles.portfolio__item__overlay__header__title
                    }
                  >
                    {props.project.title}
                  </h1>
                  { props.project.technologies && (<p
                    className={
                      ProjectGalleryItemStyles.portfolio__item__overlay__header__skills
                    }
                  >
                   { props.project.technologies.length > 1 ? `${props.project.technologies[0]}/${props.project.technologies[1]}` :props.project.technologies[0]}
                  </p>)
                  }
                </div>
                <div
                  className={
                    ProjectGalleryItemStyles.portfolio__item__overlay__cta
                  }
                >
                  {props.project.sourceCode &&(<a href={props.project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      ProjectGalleryItemStyles.portfolio__item__overlay__cta__code_source
                    }
                  >
                    code source
                  </a>)}
                  <button
                    onClick={handleClickOpen}
                    className={
                      ProjectGalleryItemStyles.portfolio__item__overlay__cta__link
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
export default ProjectGalleryItem;