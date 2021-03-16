/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
function SEO({ description, lang, meta, title, bodyAttributes }) {
  const { site, allFile } = useStaticQuery(query)
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
      link={[
        {
          rel: "icon",
          href: `${allFile.nodes[0].publicURL}`,
          type: "image/svg+xml",
          size: "any",
        },
      ]}
      bodyAttributes={{
        ...(bodyAttributes != null && { class: bodyAttributes }),
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
    allFile(
      limit: 1
      filter: {
        name: { eq: "logo" }
        ext: { eq: ".svg" }
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "" }
      }
    ) {
      nodes {
        publicURL
      }
    }
  }
`
