import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  caption,
  image as imageStyle,
  slide
} from './SlideShow.module.css';

const SlideShow = (props) => {
  const { t } = useTranslation('slideShow');
  const settings = {
    showArrow: true,
    showIndicators: false,
    showThumbs: false,
    swipeable: true,
    swipeScrollTolerance: 100,
  };
  return (
    <Carousel {...settings}>
      {props.images.map((image, index) => (
        <div className={slide} key={index}>
          <GatsbyImage
            className={imageStyle}
            image={image.full.gatsbyImageData}
            alt="project"
          />
          <span className={caption}>{t(image.name)}</span>
        </div>
      ))}
    </Carousel>
  );
};
export default SlideShow;
