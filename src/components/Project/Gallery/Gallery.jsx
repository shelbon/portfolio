import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { portfolio,portfolio__wrapper,full } from "./Gallery.module.css"
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
            <div className={portfolio__wrapper}>
            <div className={`${portfolio} ${full}`}>
              {projects.map(project => (
                <ProjectGalleryItem
                  project={project}
                  key={`container-${project.id}`}
                />
              ))}
            </div>
            </div>
          )
        }}
      />
    )
  }
}

export default ProjectGallery
