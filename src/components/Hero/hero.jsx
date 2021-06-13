import React, { useEffect } from 'react';
import { LocalizedLink as Link } from 'gatsby-theme-i18n';
import {
  hero,
  hero__introduction,
  hero__title,
  hero__tagline,
  hero__cta,
} from './hero.module.css';
import { makeSpaceForNavigationByClassName } from '../../utils/utils';

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
    isMobile,
  },
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
      >
        {orderNameToUSlocale(locale, author)}
      </h1>
      <h2
        data-aos="fade-down"
        data-aos-duration="700"
        data-aos-easing="ease-out"
        className={hero__tagline}
      >
        {tagline}
      </h2>
      <Link
        to={`/${pageName}#project`}
        className={`button ${hero__cta}`}
        data-aos="fade-down"
        data-aos-duration="600"
        data-aos-easing="ease-in"
        data-aos-delay="400"
        data-aos-anchor={`.${hero__tagline}`}
      >
        <span>{cta_label}</span>
      </Link>
    </section>
  );
};
export default Hero;
