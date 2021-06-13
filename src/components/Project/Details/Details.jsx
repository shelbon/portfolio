import {
  Dialog,
  DialogContent,
  DialogTitle
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CloseIcon from '@material-ui/icons/Close';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SlideShow from '../../UI/SlideShow/SlideShow.jsx';
import {
  closeIcon,
  container,
  details__project,
  header,
  header__title,
  iconButton,
  paper,
  SlideShow__container
} from './Details.module.css';

const DetailsProject = ({
  project: { title, body, images, technologies },
  open,
  onClose,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
  return (
    <>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={onClose}
        scroll="body"
        classes={{
          paper,
        }}
      >
        <div className={header}>
          <DialogTitle
            className={header__title}
            id="responsive-dialog-title"
          >
            {title}
          </DialogTitle>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            classes={{ label: iconButton }}
          >
            <CloseIcon classes={{ root: closeIcon }} />
          </IconButton>
        </div>
        <DialogContent className={container}>
          {images && (
            <div className={SlideShow__container}>
              <SlideShow images={images} />
            </div>
          )}
          <div className={details__project}>
            {body && (
              <MDXRenderer
                technologies={technologies}
                styles={
                  (header,
                  header__title,
                  closeIcon,
                  container,
                  SlideShow__container,
                  details__project)
                }
              >
                {body}
              </MDXRenderer>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default DetailsProject;
