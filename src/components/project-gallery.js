import React from "react"
import { StaticQuery, graphql } from "gatsby"
import ProjectGalleryStyles from "../styles/project-gallery.module.css"
import ProjectItem from "./project-item.js"
import ProjectItemStyles from "../styles/project-item.module.css"
class ProjectGallery extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      overlays: [],
      isMobile: false,
      openOverlayId:-1
    }
     
    this.useDeviceDetect = this.useDeviceDetect.bind(this)
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
    this.useDeviceDetect();
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
    }),()=>console.log({"method":"open","overlays ":this.state.overlays,"overlayid":this.state.openOverlayId}));
    
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
       
    }),console.log({"method":"close","overlays ":this.state.overlays,"overlayid":this.state.openOverlayId}))
  }
  useDeviceDetect() {
    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent
    if (
      Boolean(
        userAgent.match(
          /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
        )
      )
    ) {
      this.setState(prevState => ({ isMobile: !prevState.isMobile }))
    }
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
            allProject(sort: { fields: title, order: ASC }) {
              projects: nodes {
                ...ProjectFragment
              }
            }
          }
        `}
        render={data => {
          return (
            <div className={ProjectGalleryStyles.portfolio}>
              { console.log(data.allProject.projects),
              data.allProject.projects.map((project) => (
                <ProjectItem project={project}
                key={`container-${project.id}`}
                             onMouseEnter={() => {
                              if (!this.state.isMobile) {
                                this.overlayManager(project.id)
                              }
                            }}
                            onMouseLeave={()=>{if (!this.state.isMobile) {
                               setTimeout(this.closeOverlay(this.state.openOverlayId),0)
                            }}}
                            onClick={() => {
                              if (this.state.isMobile) {
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
