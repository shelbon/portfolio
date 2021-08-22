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
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
    images {
      id
      name
      childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: TRACED_SVG
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`;
