import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

function SEO({ description, lang, meta, title }) {
  const { site, logo } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;
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
          name:`google-site-verification`,
          content:`WEQ8ugzhXsxcBnjXKLkyWyZgKyWN2z_IkyTi7ApKYps`,
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
          href: `${logo.publicURL}`,
          type: "image/svg+xml",
          size: "any",
        },
      ]}
    />
  );
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
    logo: file(name: { eq: "logo" }, ext: { eq: ".svg" }) {
      publicURL
    }
  }
`;
