import React from "react"
import footerStyles from "./Footer.module.css"
import { useTranslation } from "react-i18next"
 
 
const Footer= ()=>{
   const { t } =useTranslation("home");
    return(
    <footer className={footerStyles.footer}   >
     <div className={footerStyles.footer__details}> 
    © {new Date().getFullYear()} {t("footer")}
    </div> 
 </footer>)
}
export default Footer;
