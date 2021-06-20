import { graphql } from 'gatsby';

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
    coverImage {
      name
      full: childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
    images {
      name
      full: childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 800
          height: 400
          placeholder: TRACED_SVG
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`;
