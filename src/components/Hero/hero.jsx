import { LocalizedLink as Link } from "gatsby-theme-i18n";
import React, { useEffect } from "react";
import { makeSpaceForNavigationByClassName } from "../../utils/utils";
import { cta, hero, introduction, tagline, title } from "./hero.module.css";

const Hero = ({ data, isMobile }) => {
  useEffect(() => {
    makeSpaceForNavigationByClassName(isMobile, hero, "margin-top", false);
  }, [isMobile]);

  return (
    <section className={`section ${hero}`}>
      <div className={introduction}>{data.introduction}</div>
      <h1 className={title}>{data.author}</h1>
      <h2 className={tagline}>{data.tagline}</h2>
      <Link to={`/${data.pageName}#project`} className={`button ${cta}`}>
        <span>{data.cta_label}</span>
      </Link>
    </section>
  );
};
export default Hero;
