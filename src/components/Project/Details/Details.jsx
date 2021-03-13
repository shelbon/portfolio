import React from "react"
import SlideShow from "../../UI/SlideShow/SlideShow.jsx"
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core"
import { MDXRenderer } from "gatsby-plugin-mdx"
import {
  header,
  header__title,
  closeIcon,
  container,
  SlideShow__container,
  details__project
} from "./Details.module.css"
import CloseIcon from "@material-ui/icons/Close"
import IconButton from "@material-ui/core/IconButton"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
const DetailsProject = ({
  title,
  body,
  images,
  technologies,
  open,
  onClose,
}) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down("lg"))
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        scroll="body"
      >
        <div className={header}>
          <DialogTitle className={header__title} id="responsive-dialog-title">
            {title}
          </DialogTitle>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon className={closeIcon} />
          </IconButton>
        </div>
        <DialogContent className={container}>
          {images && (
            <div className={SlideShow__container}>
              {" "}
              <SlideShow images={images} />
            </div>
          )}
          <div className={details__project}>
            {body && (
              <MDXRenderer
                technologies={technologies}
                styles={ header,
                  header__title,
                  closeIcon,
                  container,
                  SlideShow__container,
                  details__project}
              >
                {body}
              </MDXRenderer>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
export default DetailsProject
