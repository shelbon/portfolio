import externalLinkAlt from '@iconify/icons-la/external-link-alt';
import githubIcon from '@iconify/icons-la/github';
import Icon from '@iconify/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import TechList from '../TechList/TechList';
import DetailsProject from './Details/Details';
import {
  description,
  info,
  infoTitle,
  inlineContainer,
  linkContainer,
  moreInfo,
  projectItem,
  sectionTitle,
  titleContainer
} from './projects.module.css';

const Projects = ({ data, t }) => {
  const projects = data.map((project, index) => {
    const demoLinkLabel = `  project ${project.title} demo`;
    const repoLinkLabel = `  project ${project.title} repo`;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    return (
      <article className={projectItem} key={project.title + index}>
        <a
          aria-label={
            project.demoLink
              ? demoLinkLabel
              : project.repoLink
              ? repoLinkLabel
              : `project ${project.title}`
          }
          href={
            project.demoLink
              ? project.demoLink
              : project.repoLink
              ? project.repoLink
              : '#'
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.coverImage && (
            <GatsbyImage
              image={project.coverImage.full.gatsbyImageData}
              alt={`project ${project.title}`}
              loading="eager"
            />
          )}
        </a>
        <section className={info}>
          <a
            href={
              project.demoLink
                ? project.demoLink
                : project.repoLink
                ? project.repoLink
                : '#'
            }
            target="_blank"
            rel="noopener noreferrer"
            className={titleContainer}
          >
            <h2 className={infoTitle}>{project.title}</h2>
          </a>
          <section className={description}>
            <p>
              {project.description ||
                t('section.work.description.notfound')}
            </p>
          </section>
          <TechList techs={project.technologies} />
          <div className={inlineContainer}>
            <button
              type="button"
              onClick={handleClickOpen}
              className={` button ${moreInfo}`}
            >
              {t('projectItem:more_info')}
            </button>
            <section className={linkContainer}>
              {project.repoLink && (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Repository Link"
                  aria-label={repoLinkLabel}
                >
                  <Icon icon={githubIcon} />
                </a>
              )}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Demo Link"
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
            />
          )}
        </section>
      </article>
    );
  });

  return (
    <section id="projects" className="section">
      <h2 className={sectionTitle}>{t('section.work.title')}</h2>
      {projects}
    </section>
  );
};

Projects.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  t: PropTypes.func.isRequired,
};

export default Projects;
