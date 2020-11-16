import React from "react"
import "../styles/skills.scss"
import { FaJsSquare, FaReact, FaSass } from "react-icons/fa"
import { GrGatsbyjs } from "react-icons/gr"
import { useStaticQuery, graphql } from "gatsby"

function Skills() {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { id: { eq: "tech" } } }) {
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
    <div className="skills">
      <div className="skills__wrapper">
        <h2>{information.frontmatter.title}</h2>
        <p className="text--paragraph">{information.rawMarkdownBody}</p>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div className="skills__list">
            <div className="skill__card">
              <FaJsSquare
                size="2.5rem"
                title="logo icon"
                value={{ style: { color: "black" } }}
              />
            </div>
            <div className="skill__card">
              <FaReact
                size="2.5rem"
                title="logo icon"
                value={{ style: { color: "black" } }}
              />
            </div>
            <div className="skill__card">
              <FaSass
                size="2.5rem"
                title="logo icon"
                value={{ style: { color: "black" } }}
              />
            </div>
            <div className="skill__card">
              {" "}
              <GrGatsbyjs
                size="2.5rem"
                title="logo icon"
                value={{ style: { color: "black" } }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
