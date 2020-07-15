import React from "react"
import Image from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import ProjectGalleryStyles from "../styles/project-gallery.module.css"
 
 class ProjectGallery extends React.Component{
   
   constructor(props){
    super(props)
    this.state={
       isOverlayOpen:false,
       overlays:[]
    };
     this.overlayManager=this.overlayManager.bind(this);
     this.showOverlay=this.showOverlay.bind(this);
     this.closeOverlay=this.closeOverlay.bind(this);
   }
   componentDidMount(){
   
    this.setState(()=>{
        return {overlays:[...document.getElementsByClassName(ProjectGalleryStyles.portfolio__item__overlay)]}
    });
 
  }
   showOverlay(id){
     let overlay=this.state.overlays.find(overlay=>overlay.dataset.overlayId===id);
    
      overlay.classList.add(ProjectGalleryStyles.jsOverlayOpen);
     overlay.style.display="flex";
     
 }
 closeOverlay(overlay){
    overlay.style.display="none";
    overlay.classList.remove(ProjectGalleryStyles.jsOverlayOpen);
 }
  overlayManager(id){
 
    let overlayOpen=this.state.overlays.find(overlay=>overlay.classList.contains(ProjectGalleryStyles.jsOverlayOpen));

   if(typeof overlayOpen !== 'undefined'){
     this.closeOverlay(overlayOpen);
   }

   this.showOverlay(id);
 
  }
  
  render()
  {
 return (
   <StaticQuery
     query={graphql`
       query {
         allProject(sort: { fields: title, order: ASC }) {
           projects: nodes {
             ...ProjectFragments
           }
         }
       }
     `}
     render={data => {
       return (
         <div className={ProjectGalleryStyles.portfolio}>
           {data.allProject.projects.map((project, index) => (
             <article
               className={ProjectGalleryStyles.portfolio__item}
               key={project.id}
               onClick={() => this.overlayManager(project.id)}
             >
               <Image
                 fluid={project.image.thumbnail.fluid}
                 key={project.image.id}
                 alt={`project ${project.title} thumbnail`}
                 className={
                   ProjectGalleryStyles.portfolio__item__img__container
                 }
               />
               <div
                 className={ProjectGalleryStyles.portfolio__item__overlay}
                 data-overlay-id={project.id}
               >
                 <div
                   className={
                     ProjectGalleryStyles.portfolio__item__overlay__header
                   }
                 >
                   <h1
                     className={
                       ProjectGalleryStyles.portfolio__item__overlay__header__title
                     }
                   >
                     {project.title}
                   </h1>
                   <p
                     className={
                       ProjectGalleryStyles.portfolio__item__overlay__header__skills
                     }
                   >
                     skills/skills
                   </p>
                 </div>
                 <div
                   className={
                     ProjectGalleryStyles.portfolio__item__overlay__cta
                   }
                 >
                   <p
                     className={
                       ProjectGalleryStyles.portfolio__item__overlay__cta__code_source
                     }
                   >
                     code source
                   </p>
                   <Link
                     to={project.slug}
                     className={
                       ProjectGalleryStyles.portfolio__item__overlay__cta__link
                     }
                   >
                     <p>plus d'info</p>
                   </Link>
                 </div>
               </div>
             </article>
           ))}
         </div>
       )
     }}
   />
 )
  }

  }
 
export default ProjectGallery;