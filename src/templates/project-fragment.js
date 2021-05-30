import { graphql } from 'gatsby';

export const fragment = graphql`
  fragment ProjectFragment on Project {
    id
    title
    body
    sourceCode
    technologies
    url
    locale
    coverImage {
      name
      full: childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 900
          height: 540
          placeholder: TRACED_SVG
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
    images {
      name
      full: childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 900
          height: 540
          placeholder: TRACED_SVG
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`;
