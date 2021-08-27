import React from "react"
import { withTranslation } from "react-i18next"
import SEO from "../../components/seo"
import "../../styles/layout.css"
import {
  maintenance_container,
  maintenance_content,
} from "../../styles/maintenance.module.css"
import "../../styles/normalize.css"
const UnderMaintenance = ({ t }) => {
  return (
    <div className={maintenance_container}>
      <SEO title={t("title")} description={t("description")} />
      <section className={maintenance_content}>
        <h1>{t("title")}</h1>
        <p>{t("body")}</p>
        <a href="mailto:mouclepatrick@protonmail.com">contact me </a>
      </section>
    </div>
  )
}
export default withTranslation("maintenance")(UnderMaintenance)
