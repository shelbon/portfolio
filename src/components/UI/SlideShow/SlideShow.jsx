import React from "react"
import Img from "gatsby-image"
import slideShowStyles from "./SlideShow.module.css"
 
import { Carousel } from 'react-responsive-carousel';
 
 import "react-responsive-carousel/lib/styles/carousel.min.css";
 
const SlideShow = props => {
 
  let settings = {
    showArrow:true,
    showIndicators:false,
    showThumbs:false,
    swipeable:true,
    swipeScrollTolerance:100
  };
  return (
      
       <Carousel {...settings}> 
      {props.images.map((image, index) => (
            <div className={slideShowStyles.slide}key={index}>
             <Img  className={slideShowStyles.slide__image}  fluid={image.full.fluid}/>
            <span className={slideShowStyles.slide__caption}>{image.name.replace('-'," ")}</span>
            </div>
          
         
      ))}
    </Carousel>
  )
}
export default SlideShow
