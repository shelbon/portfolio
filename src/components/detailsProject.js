import React from "react"
import SlideShow from "./slideShow";
import { Dialog,DialogTitle,DialogContent } from "@material-ui/core";
import { MDXRenderer } from "gatsby-plugin-mdx"
import DetailsProjectStyles from "../styles/details-project.module.css"
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
const  DetailsProject=({ title, body,images,technologies,open,onClose })=>{
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('lg'));
 return( <>
        <Dialog    fullScreen={fullScreen} open={open}  onClose={onClose} >
        
          <div className={DetailsProjectStyles.header}>
          <DialogTitle className={DetailsProjectStyles.header__title} id="responsive-dialog-title">{title}</DialogTitle>
            <IconButton   edge="start" className={DetailsProjectStyles.closeIcon__container}
                   color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon className={DetailsProjectStyles.closeIcon} />
            </IconButton>
          </div>
          <DialogContent className={DetailsProjectStyles.container}>
          {images && <div className={DetailsProjectStyles.SlideShow__container}> <SlideShow   images={images}/></div>}
          <div className={DetailsProjectStyles.details__project}>
            {body && <MDXRenderer 
            technologies={technologies} styles={DetailsProjectStyles}>{body}</MDXRenderer>}
            </div>
          </DialogContent>
         
        </Dialog>
        </>
 );
}
export default DetailsProject;
