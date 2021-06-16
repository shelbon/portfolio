import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import React, { useEffect } from 'react';
import { makeSpaceForNavigationByClassName } from '../../utils/utils';
import {
  hero,
  hero__cta,
  hero__introduction,
  hero__tagline,
  hero__title
} from './hero.module.css';

function orderNameToUSlocale(locale, authorName) {
  if (authorName === undefined || locale === undefined) {
    return;
  }
  let lastName = '';
  let formatedName = '';
  let otherNames = '';
  if (locale !== 'fr') {
    [lastName, ...otherNames] = authorName.split(' ');
    otherNames.forEach((name) => (formatedName += `${name} `));
    formatedName += ` ${lastName}`;
  }
  return formatedName || authorName;
}
const Hero = ({
  data: {
    author,
    introduction,
    tagline,
    cta_label,
    pageName,
    locale,
  },
  isMobile,
}) => {
  useEffect(() => {
    makeSpaceForNavigationByClassName(
      isMobile,
      hero,
      'margin-top',
      false,
    );
  }, [isMobile]);

  return (
    <section className={`section ${hero}`}>
      <div className={hero__introduction}>{introduction}</div>
      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        className={hero__title}
        data-aos-anchor={`.${hero__introduction}`}
      >
        {orderNameToUSlocale(locale, author)}
      </h1>
      <h2
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="700"
        data-aos-easing="ease-out"
        data-aos-anchor={`.${hero__title}`}
        className={hero__tagline}
      >
        {tagline}
      </h2>
      <Link
        to={`/${pageName}#project`}
        className={`button ${hero__cta}`}
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-easing="ease-in"
        data-aos-delay="1000"
        data-aos-anchor={`.${hero__tagline}`}
      >
        <span>{cta_label}</span>
      </Link>
    </section>
  );
};
export default Hero;
