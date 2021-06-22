import { LocalizedLink as Link } from "gatsby-theme-i18n";
import React, { useEffect } from "react";
import { makeSpaceForNavigationByClassName } from "../../utils/utils";
import { cta, hero, introduction, tagline, title } from "./hero.module.css";

function orderNameToUSlocale(locale, authorName) {
  if (authorName === undefined || locale === undefined) {
    return;
  }
  let lastName = "";
  let formatedName = "";
  let otherNames = "";
  if (locale !== "fr") {
    [lastName, ...otherNames] = authorName.split(" ");
    otherNames.forEach((name) => (formatedName += `${name} `));
    formatedName += ` ${lastName}`;
  }
  return formatedName || authorName;
}
const Hero = ({ data, isMobile }) => {
  useEffect(() => {
    makeSpaceForNavigationByClassName(isMobile, hero, "margin-top", false);
  }, [isMobile]);

  return (
    <section className={`section ${hero}`}>
      <div className={introduction}>{data.introduction}</div>
      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-easing="ease-in"
        className={title}
        data-aos-anchor={`.${introduction}`}
      >
        {orderNameToUSlocale(data.locale, data.author)}
      </h1>
      <h2
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="700"
        data-aos-easing="ease-out"
        data-aos-anchor={`.${title}`}
        className={tagline}
      >
        {data.tagline}
      </h2>
      <Link
        to={`/${data.pageName}#project`}
        className={`button ${cta}`}
        data-aos="zoom-in"
        data-aos-duration="600"
        data-aos-easing="ease-in"
        data-aos-delay="1000"
        data-aos-anchor={`.${tagline}`}
      >
        <span>{data.cta_label}</span>
      </Link>
    </section>
  );
};
export default Hero;
