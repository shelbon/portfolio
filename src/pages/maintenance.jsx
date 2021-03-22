import React from "react"
import SEO from "../components/seo"
import "../styles/layout.css"
import {
  maintenance_container,
  maintenance_title,
  maintenance_body,
  maintenance_bodyTag,
} from "../styles/maintenance.module.css"
import "../styles/normalize.css"
import LanguageSwitcher from "../components/UI/LanguageSwitcher/LanguageSwitcher"
import { withTranslation } from "react-i18next"
const UnderMaintenance = ({ t }) => {
  return (
    <>
      <SEO
        title={t("title")}
        description={t("description")}
        bodyAttributes={maintenance_bodyTag}
      />
      <section className={maintenance_container}>
        <h1>{t("title")}</h1>
        <p>{t("body")}</p>
        <a href="mailto:mouclesheron@gmail.com">contact me </a>
      </section>
    </>
  )
}
export default withTranslation("maintenance")(UnderMaintenance)
