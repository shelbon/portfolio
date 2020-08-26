import React from "react"
import footerStyles from "../styles/footer.module.css"
 
 
const footer= ()=>{
    return(
    <footer className={footerStyles.footer}   >
     <div className={footerStyles.footer__details}> 
    © {new Date().getFullYear()} Patrick Shéron MOUCLE, Tous droits réservés.
    </div> 
 </footer>)
}
export default footer;
