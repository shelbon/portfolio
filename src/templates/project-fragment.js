import { graphql } from "gatsby"

export const fragment = graphql`
  fragment ProjectFragment on Project {
    id
    title
    body
    sourceCode
    technologies
    url
    locale
    excerpt
    coverImage {
      name
      full: childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 900
          height: 540
          transformOptions: { cropFocus: CENTER }
        )
      }
      thumb: childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 456
          height: 325
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
          transformOptions: { cropFocus: CENTER }
        )
      }
      thumb: childImageSharp {
        gatsbyImageData(
          layout: CONSTRAINED
          width: 456
          height: 325
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`
