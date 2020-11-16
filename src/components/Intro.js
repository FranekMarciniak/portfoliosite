import React from "react"
import "../styles/intro.scss"
import Picture from "../images/blank-profile-picture.png"
import { useStaticQuery, graphql } from "gatsby"
import markdownToTxt from "markdown-to-txt"
function Intro() {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { id: { eq: "intro" } } }) {
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
    <section className="intro">
      <div className="intro__wrapper">
        <div className="intro__text__wrapper">
          <h2>{information.frontmatter.title}</h2>
          <p className="intro__paragraph">{information.rawMarkdownBody}</p>
          <button className="btn btn--intro btn--secondary">My projects</button>
        </div>
        <div className="intro__photo_wrapper">
          <img src={Picture} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Intro
