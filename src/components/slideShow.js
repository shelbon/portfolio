import React from "react"
import Img from "gatsby-image"
import slideShowStyles from "../styles/slide-show.module.css"
 
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
/*<div className={`${slideShowStyles.control__container} ${slideShowStyles.orderFirst}`}>
<FaAngleLeft className={slideShowStyles.previous}/>
</div>
<Img fluid={image.full.fluid}alt={image.name} className={slideShowStyles.slide}/>
<div className={`${slideShowStyles.control__container} ${slideShowStyles.orderLast}`}>
<FaAngleRight className={slideShowStyles.next}/>
</div>*/
export default SlideShow
