import { graphql } from "gatsby"

export const fragment = graphql`
  fragment ProjectFragment on Project {
    id
    title
    body
    sourceCode
    technologies
    url
    coverImage{
      name
      full: childImageSharp {
        fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
      thumb:childImageSharp{
        fluid(maxWidth: 456, maxHeight: 325, cropFocus: CENTER){
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
           
        }
      }
    }
    images {
      name
      full: childImageSharp {
        fluid(maxWidth: 960, maxHeight: 540, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
      thumb:childImageSharp{
        fluid(maxWidth: 456, maxHeight: 325, cropFocus: CENTER){
          ...GatsbyImageSharpFluid_withWebp
          ...GatsbyImageSharpFluidLimitPresentationSize
           
        }
      }
    }
  }
 
`
