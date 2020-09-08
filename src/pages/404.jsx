import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { LocalizedLink } from "gatsby-theme-i18n"
 
const NotFoundPage = () => {
  const {t}=useTranslation("404");
  return(
  <>
    <SEO title="404: Not found" />
    <div style={{
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
      alignContent: "center"
    }}>
    <div style={{alignSelf: "center"}}>
    <h1>{t("title") }</h1>
    <p>{t("body")} </p>
    </div>
    <LocalizedLink to='/' className="button"><p>{t("redirect.link")}</p></LocalizedLink>
    </div>
  </>);
}

export default NotFoundPage
