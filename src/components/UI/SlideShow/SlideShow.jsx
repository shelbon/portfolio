import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { slide, slide__image, slide__caption } from "./SlideShow.module.css"

import { Carousel } from "react-responsive-carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { useTranslation } from "react-i18next"

const SlideShow = props => {
  const { t } = useTranslation("slideShow")
  let settings = {
    showArrow: true,
    showIndicators: false,
    showThumbs: false,
    swipeable: true,
    swipeScrollTolerance: 100,
  }
  return (
    <Carousel {...settings}>
      {props.images.map((image, index) => (
        <div className={slide} key={index}>
          <GatsbyImage
            className={slide__image}
            image={image.full.gatsbyImageData}
          />
          <span className={slide__caption}>{t(image.name)}</span>
        </div>
      ))}
    </Carousel>
  )
}
export default SlideShow
