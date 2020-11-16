import React from "react"
import "../styles/about.scss"
import { useStaticQuery, graphql } from "gatsby"

function About() {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { id: { eq: "about" } } }) {
          edges {
            node {
              frontmatter {
                title
              }
              rawMarkdownBody
            }
          }
        }
      }
    `
  )
  const information = query.allMarkdownRemark.edges[0].node
  return (
    <section className="about">
      <div className="about__wrapper">
        <h2>{information.frontmatter.title}</h2>
        <p className="text--paragraph">{information.rawMarkdownBody}</p>
      </div>
    </section>
  )
}

export default About
