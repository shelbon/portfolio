import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { portfolio } from "./Gallery.module.css"
import ProjectGalleryItem from "./Item/Item.jsx"
class ProjectGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locale: props.locale,
    }
  }
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allProject(sort: { fields: title, order: ASC }) {
              projects: nodes {
                ...ProjectFragment
              }
            }
          }
        `}
        render={data => {
          let projects = data.allProject.projects.filter(
            project => project.locale === this.props.locale
          )
          return (
            <div className={portfolio}>
              {projects.map(project => (
                <ProjectGalleryItem
                  project={project}
                  key={`container-${project.id}`}
                  onMouseEnter={() => {
                    if (!this.props.isMobile) {
                      this.overlayManager(project.id)
                    }
                  }}
                  onMouseLeave={() => {
                    if (!this.props.isMobile) {
                      setTimeout(this.closeOverlay(this.state.openOverlayId), 0)
                    }
                  }}
                  onClick={() => {
                    if (this.props.isMobile) {
                      this.overlayManager(project.id)
                    }
                  }}
                />
              ))}
            </div>
          )
        }}
      />
    )
  }
}

export default ProjectGallery
