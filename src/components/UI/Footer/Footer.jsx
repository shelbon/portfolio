import React from "react"
import {footer,footer__details} from "./Footer.module.css"
import { useTranslation } from "react-i18next"
 
 
const Footer= ()=>{
   const { t } =useTranslation("home");
    return(
    <footer className={footer}   >
     <div className={footer__details}> 
    © {new Date().getFullYear()} {t("footer")}
    </div> 
 </footer>)
}
export default Footer;
