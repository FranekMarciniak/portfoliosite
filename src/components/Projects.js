import React from "react"
import ProjectCard from "./ProjectCard"
import "../styles/projects.scss"
import "../styles/card.scss"
import { useStaticQuery, graphql } from "gatsby"

function Projects({ data, page, fav }) {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { display: { eq: true } } }) {
          edges {
            node {
              frontmatter {
                title
                Live
                Image
                Github
                Fav
                Developed
              }
              rawMarkdownBody
            }
          }
        }
      }
    `
  )

  let repos
  if (fav === true) {
    repos = query.allMarkdownRemark.edges.filter(repo => {
      return repo.node.frontmatter.fav !== true
    })
  } else {
    repos = query.allMarkdownRemark.edges
  }
  console.log(repos)
  return (
    <section className={page === "whole" ? "projects whole" : "projects"}>
      <div className="projects__wrapper">
        <h2>Featured projects</h2>
        <div className="projects__grid__wrapper">
          <div className="projects__grid">
            {repos.map(repo => (
              <div className="projects__item__wrapper">
                <ProjectCard repo={repo.node} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
