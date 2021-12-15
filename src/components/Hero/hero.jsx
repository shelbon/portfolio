import { MDXRenderer } from "gatsby-plugin-mdx";
import { LocalizedLink as Link } from "gatsby-theme-i18n";
import React, { useEffect } from "react";
import {
  cta,
  hero,
  introduction,
  role,
  tagline,
  title,
} from "./hero.module.css";
const Hero = ({ data }) => {
  return (
    <section className={`section ${hero}`}>
      <p className={introduction}>{data.hero.introduction}</p>
      <p className={title}>{data.author}</p>
      <h1 className={role}>{data.hero.role}</h1>
      <MDXRenderer classes={tagline}>{data.hero.body}</MDXRenderer>
      <Link to={`/${data.pageName}#project`} className={`button ${cta}`}>
        <span>{data.hero.ctaLabel}</span>
      </Link>
    </section>
  );
};
export default Hero;
