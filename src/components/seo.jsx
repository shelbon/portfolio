import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ description, lang, meta, title }) {
  const { site, allFile } = useStaticQuery(query);
  const metaDescription =
    description || site.siteMetadata.description;
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
          rel: 'icon',
          href: `${allFile.nodes[0].publicURL}`,
          type: 'image/svg+xml',
          size: 'any',
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
`;
