import React from "react"
import ProjectCard from "./ProjectCard"
import "../styles/projects.scss"
import "../styles/card.scss"
function Projects({ data, page }) {
  const repos = data
  return (
    <section className={page === "whole" ? "projects whole" : "projects"}>
      <div className="projects__wrapper">
        <h2>Featured projects</h2>
        <div className="projects__grid__wrapper">
          <div className="projects__grid">
            {repos.map(repo => (
              <div className="projects__item__wrapper">
                <ProjectCard key={repo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
