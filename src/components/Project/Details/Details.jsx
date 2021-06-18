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
import { Trans } from 'react-i18next';
import SlideShow from '../../UI/SlideShow/SlideShow';
import {
  closeIcon,
  container,
  detailsProject,
  header,
  headerTitle,
  iconButton,
  paper,
  slideShowContainer
} from './Details.module.css';

const DetailsProject = ({
  project: { title, body, images, technologies },
  open,
  onClose,
  t,
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
        role="dialog"
        aria-modal="true"
        aria-labelledby={headerTitle}
        aria-describedby="dialogDesc"
      >
        <p id="dialogDesc" className="sr-only">
          <Trans i18nKey="projectDetails:dialogDesc">
            {{ title }}
          </Trans>
        </p>
        <div className={header}>
          <DialogTitle
            className={headerTitle}
            id="responsive-dialog-title"
          >
            {title}
          </DialogTitle>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label={t('projectDetails:closeIconAriaLabel')}
            classes={{ label: iconButton }}
          >
            <CloseIcon classes={{ root: closeIcon }} />
          </IconButton>
        </div>
        <DialogContent className={container}>
          {images && (
            <div className={slideShowContainer}>
              <SlideShow images={images} />
            </div>
          )}

          <div className={detailsProject}>
            {body && (
              <MDXRenderer
                technologies={technologies}
                styles={
                  (header,
                  headerTitle,
                  closeIcon,
                  container,
                  slideShowContainer,
                  detailsProject)
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
