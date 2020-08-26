import { graphql } from "gatsby"

export const fragment = graphql`
  fragment ProjectFragment on Project {
    id
    title
    body
    sourceCode
    technologies
    url
    images {
      name
      full: childImageSharp {
        fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER, quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
      thumb:childImageSharp{
        fluid(maxWidth: 456, maxHeight: 325, cropFocus: CENTER, quality: 100){
          ...GatsbyImageSharpFluid_tracedSVG
          ...GatsbyImageSharpFluidLimitPresentationSize
           
        }
      }
      fixed: childImageSharp {
        fixed(width: 390,height:300, quality: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`
