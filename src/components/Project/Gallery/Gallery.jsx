import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProjectGalleryStyles from "./Gallery.module.css"
import ProjectGalleryItem from "./Item/Item.jsx"
import ProjectItemStyles from "./Item/Item.module.css"
class ProjectGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlays: [],
      openOverlayId:-1,
      locale:props.locale
    }
     
    this.overlayManager = this.overlayManager.bind(this)
    this.showOverlay = this.showOverlay.bind(this)
    this.closeOverlay = this.closeOverlay.bind(this)
  }

  componentDidMount() {
    this.setState(() => {
      return {
        overlays: [
          ...document.getElementsByClassName(
            ProjectItemStyles.portfolio__item__overlay
          ),
        ],
      }
    })
    this.jsOverlayOpen=ProjectItemStyles.jsOverlayOpen;
  
  }
  
  showOverlay(id) {
 
    this.setState(prevState => ({
      overlays: prevState.overlays.map(item => {
        if (item.dataset.overlayId === id) {
          item.classList.add(this.jsOverlayOpen);
          item.style.display = "flex";
        }
        return item
      }),
      openOverlayId:id
    }));
    
  }
  closeOverlay(id) {
 
    this.setState(prevState => ({
       
      overlays:prevState.overlays.map(item => {
        if (item.dataset.overlayId === id) {
          item.classList.remove(this.jsOverlayOpen)
          item.style.display = "none"
        }
        return item
      })
      ,openOverlayId:-1
       
    }))
  }
  overlayManager(id) {
     
      if(this.state.openOverlayId!==-1){
       
        this.closeOverlay(this.state.openOverlayId);
        this.showOverlay(id); 
      } 
       else if(this.state.openOverlayId===-1)
      {
      this.showOverlay(id); 
      }
    
    
  }


  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allProject(sort: { fields: title, order: ASC } ) {
              projects: nodes {
                ...ProjectFragment
              }
            }
          }
        `}
        
        render={data => {
         
          let projects=data.allProject.projects.filter(project=>project.locale===this.props.locale);
          return (
            <div   className={ProjectGalleryStyles.portfolio}>
              {
              projects.map((project) => (
                <ProjectGalleryItem project={project}
                key={`container-${project.id}`}
                             onMouseEnter={() => {
                              if (!this.props.isMobile) {
                                this.overlayManager(project.id)
                              }
                            }}
                            onMouseLeave={()=>{if (!this.props.isMobile) {
                               setTimeout(this.closeOverlay(this.state.openOverlayId),0)
                            }}}
                            onClick={() => {
                              if (this.props.isMobile) {
                                this.overlayManager(project.id)
                               }
                              
                             }}/>
              ))}
            </div>
          )
        }}
      />
    )
  }
}

export default ProjectGallery
