import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div style={{
      display: "flex",
      flexFlow: "column nowrap",
      justifyContent: "center",
      alignContent: "center"
    }}>
    <div style={{alignSelf: "center"}}>
    <h1>Page inexistante </h1>
    <p>Cette page n&#39;existe pas </p>
    </div>
    <a href='/' className="button"><p>retour à l'accueil</p></a>
    </div>
  </>
)

export default NotFoundPage
