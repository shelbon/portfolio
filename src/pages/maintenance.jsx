import React from "react"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import "../styles/layout.css"
import {
  maintenance_container,
  maintenance_title,
  maintenance_body,
  maintenance_bodyTag
  
} from "../styles/maintenance.module.css"
import "../styles/normalize.css"
const UnderMaintenance = () => {
  const { t } = useTranslation(["maintenance"])
  return (
    <>
      <SEO title={t("title")} description={t("description")} bodyAttributes={maintenance_bodyTag} />
      <section className={maintenance_container}>
        <h1>{t("title")}</h1>
        <p>{t("body")}</p>
        <a href="mailto:mouclesheron@gmail.com">contact me </a>
      </section>
    </>
  )
}
export default UnderMaintenance
