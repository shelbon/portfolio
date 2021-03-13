import React from "react"

import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
const NotFoundPage = () => {
  const { t } = useTranslation("404")
  return (
    <>
      <SEO title="404: Not found" />
      <div
        style={{
          display: "flex",
          flexFlow: "column nowrap",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div style={{ alignSelf: "center" }}>
          <h1 style={{ color: "#ffffff" }}>{t("title")}</h1>
          <p style={{ color: "#ffffff" }}>{t("body")} </p>
        </div>
        <Link to="/" className="button">
          <p>{t("redirect.link")}</p>
        </Link>
      </div>
    </>
  )
}

export default NotFoundPage
