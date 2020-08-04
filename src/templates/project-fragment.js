import { graphql } from "gatsby"

export const fragment = graphql`
  fragment ProjectFragment on Project {
    id
    title
    excerpt
    body
    slug
    sourceCode
    url
    image {
      full: childImageSharp {
        fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER,fit:CONTAIN, quality: 100) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      thumbnail: childImageSharp {
        fluid(maxWidth: 456, cropFocus: CENTER,fit:CONTAIN, quality: 100) {
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
        }
      }
      fixed: childImageSharp {
        fixed(width: 960, quality: 100) {
          src
        }
      }
    }
  }
`
