import { graphql } from "gatsby";

export const fragment = graphql`
  fragment ProjectFragment on Project {
    id
    title
    body
    repoLink
    demoLink
    technologies
    description
    locale
    moreInfo
    coverImage {
      name
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: TRACED_SVG
          formats: [AUTO, AVIF, WEBP]
        )
      }
    }
    images {
      id
      name
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: TRACED_SVG
          formats: [AUTO, AVIF, WEBP]
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`;
