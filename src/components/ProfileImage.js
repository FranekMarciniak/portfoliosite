import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "blank-profile-picture.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 150) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    <Img
      style={{ maxWidth: "250px", display: "block" }}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  )
}

export default Image
