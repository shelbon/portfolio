import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import {
  portfolio__item__container,
  portfolio__item,
  portfolio__item__img__container,
  portfolio__item__excerpt__container,
  portfolio__item__excerpt__text,
  portfolio__item__excerpt__cta__link,
  portfolio__item__excerpt__title,
} from "./Item.module.css"
import DetailsProject from "../../Details/Details"
import { useTranslation } from "react-i18next"
import SkillsPanel from "../../../UI/SkillPanel/skillsPanel"
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
    <div
      className={portfolio__item__container}
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

        <div className={portfolio__item__excerpt__container}>
          <p className={portfolio__item__excerpt__title}>
            {props.project.title}
          </p>
          <p className={portfolio__item__excerpt__text}>
            {props.project.excerpt}
          </p>
          {props.project.technologies && (
            <SkillsPanel skills={props.project.technologies} />
          )}
          <button
            onClick={handleClickOpen}
            className={portfolio__item__excerpt__cta__link}
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
  )
}
export default ProjectGalleryItem
