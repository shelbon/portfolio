import externalLinkAlt from "@iconify/icons-la/external-link-alt";
import githubIcon from "@iconify/icons-la/github";
import { Icon } from "@iconify/react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React from "react";
import TechList from "../TechList/TechList";
import DetailsProject from "./Details/Details";
import {
  description as descriptionStyle,
  imageContainer,
  info,
  infoTitle,
  inlineContainer,
  linkContainer,
  moreInfo as moreInfoStyle,
  projectItem,
  sectionTitle,
  titleContainer,
} from "./projects.module.css";

const Projects = ({ data, t }) => {
  const projects = data.map((project) => {
    const {
      id,
      title,
      repoLink,
      demoLink,
      technologies,
      description,
      coverImage,
      moreInfo,
    } = project;
    const demoLinkLabel = `${t("projectItem:demoLinkAriaLabel")} ${title}`;
    const repoLinkLabel = `${t("projectItem:repoLinkAriaLabel")} ${title}`;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    return (
      <article className={projectItem} key={id}>
        <a
          aria-label={
            demoLink
              ? demoLinkLabel
              : repoLink
              ? repoLinkLabel
              : `${t("projectItem:project")} ${title}`
          }
          href={demoLink || repoLink || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          {coverImage && (
            <GatsbyImage
              image={getImage(coverImage)}
              alt={`${t("projectItem:project")} ${title}`}
              className={imageContainer}
            />
          )}
        </a>
        <section className={info}>
          <a
            href={demoLink || repoLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={titleContainer}
          >
            <h2 className={infoTitle}>{title}</h2>
          </a>
          <section className={descriptionStyle}>
            <p>{description || t("section.work.description.notfound")}</p>
          </section>
          <TechList techs={technologies} />
          <div className={inlineContainer}>
            {moreInfo && (
              <button
                type="button"
                onClick={handleClickOpen}
                className={` button ${moreInfoStyle}`}
              >
                <p> {t("projectItem:more_info")}</p>
              </button>
            )}
            <section className={linkContainer}>
              {repoLink && (
                <a
                  href={repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t("projectItem:repoLinkTitle")}
                  aria-label={repoLinkLabel}
                >
                  <Icon icon={githubIcon} />
                </a>
              )}
              {demoLink && (
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t("projectItem:demoLinkTitle")}
                  aria-label={demoLinkLabel}
                >
                  <Icon icon={externalLinkAlt} />
                </a>
              )}
            </section>
          </div>
          {open && (
            <DetailsProject
              project={project}
              onClose={handleClose}
              open={open}
              t={t}
            />
          )}
        </section>
      </article>
    );
  });

  return (
    <section id="projects" className="section">
      <h2 className={sectionTitle}>{t("section.work.title")}</h2>
      {projects}
    </section>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  t: PropTypes.func.isRequired,
};

export default Projects;
