import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  portfolio__item__container,
  portfolio__item,
  portfolio__item__img__container,
  portfolio__item__overlay,
  portfolio__item__overlay__header,
  portfolio__item__overlay__header__title,
  portfolio__item__overlay__header__skills,
  portfolio__item__overlay__cta,
  portfolio__item__overlay__cta__code_source,
  portfolio__item__overlay__cta__link
} from "./Item.module.css"
import DetailsProject from "../../Details/Details"
import { useTranslation } from "react-i18next"
const ProjectGalleryItem = props => {
  const [open, setOpen] = React.useState(false)
  const { t } = useTranslation("projectItem")
  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div className={portfolio__item__container}>
      <article
        className={portfolio__item}
        onMouseEnter={() => props.onMouseEnter()}
        onClick={() => {
          props.onClick()
        }}
      >
        {props.project.images && (
          <GatsbyImage
            image={props.project.coverImage.full.gatsbyImageData}
            alt={`project ${props.project.title} thumbnail`}
            className={portfolio__item__img__container}
            loading="eager"
            fadeIn={false}
          />
        )}
      </article>
      <div
        onMouseLeave={() => {
          props.onMouseLeave()
        }}
        className={portfolio__item__overlay}
        data-overlay-id={props.project.id}
      >
        <div
          className={portfolio__item__overlay__header}
        >
          <h1
            className={
              portfolio__item__overlay__header__title
            }
          >
            {props.project.title}
          </h1>
          {props.project.technologies && (
            <p
              className={
                portfolio__item__overlay__header__skills
              }
            >
              {props.project.technologies.length > 1
                ? `${props.project.technologies[0]}/${props.project.technologies[1]}`
                : props.project.technologies[0]}
            </p>
          )}
        </div>
        <div className={portfolio__item__overlay__cta}>
          {props.project.sourceCode && (
            <a
              href={props.project.sourceCode}
              target="_blank"
              rel="noopener noreferrer"
              className={
                portfolio__item__overlay__cta__code_source
              }
            >
              code source
            </a>
          )}
          <button
            onClick={handleClickOpen}
            className={
              portfolio__item__overlay__cta__link
            }
          >
            {t("more_info")}
          </button>
          {open && (
            <DetailsProject
              {...props.project}
              onClose={handleClose}
              open={open}
            />
          )}
        </div>
      </div>
    </div>
  )
}
export default ProjectGalleryItem
