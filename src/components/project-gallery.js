import React from "react"
import Image from "gatsby-image"
import { StaticQuery, graphql, Link } from "gatsby"
import {projectsData as projects} from "../content/data.js"
import ProjectGalleryStyles from "./project-gallery.module.css"
 const ProjectGallery = ()=> (
  <StaticQuery
  query={graphql`
  query {
    images: allFile(filter: {relativeDirectory:{eq:"projects"}}) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 480,maxHeight:480) {
              ...GatsbyImageSharpFluid_tracedSVG
              
            }
          }
        }
      }
    }
  }
`}
    render={data => {
      console.log(data);
      return (
        <div className={ProjectGalleryStyles.portfolio}>
          
          {projects.map((project,index) => (
            <div
              className={ProjectGalleryStyles.portfolio__item}
              key={project.id}
            >
              <span className={ProjectGalleryStyles.project__name}>
                {project.title ||"some title"}
              </span>

              <div className={ProjectGalleryStyles.gridProject}>
                <Link
                  to="/"
                  className={ProjectGalleryStyles.project__link__mobile}
                >
                   
                </Link>
                <Image
                  fluid={data.images.edges[index].node.childImageSharp.fluid}
                  alt={`project ${project.title || "placeholder"} thumbnail`}
                  className={ProjectGalleryStyles.img__container}
                />
                <div className={ProjectGalleryStyles.img__overlay}>
                  <span
                    className={ProjectGalleryStyles.overlay__text1}
                    data-tag-theme="text"
                  >
                    <p className={ProjectGalleryStyles.button}>skill1</p>
                  </span>
                  <span 
                    className={ProjectGalleryStyles.overlay__text2}
                    data-tag-theme="text"
                  >
                    <p className={ProjectGalleryStyles.button}>skill2</p>
                  </span>
                  <span
                    className={ProjectGalleryStyles.overlay__text3}
                    data-tag-theme="text"
                  >
                    <p className={ProjectGalleryStyles.button}>skill3</p>
                  </span>
                  <span
                    className={ProjectGalleryStyles.overlay__text4}
                    data-tag-theme="text"
                  >
                    <p className={ProjectGalleryStyles.button}>skill4</p>
                  </span>
                  <span
                    className={ProjectGalleryStyles.overlay__github}
                    data-tag-theme="github"
                  >
                    <p className={ProjectGalleryStyles.button}>code source</p>
                  </span>
                  <Link
                    to="/"
                    className={ProjectGalleryStyles.overlay__link}
                    data-tag-theme="link"
                  >
                    <p className={ProjectGalleryStyles.button}>link</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }}
  />
  
 )
export default ProjectGallery;