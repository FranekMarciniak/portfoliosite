import React from "react"
import ProjectCard from "./ProjectCard"
import "../styles/projects.scss"
import "../styles/card.scss"
function Projects() {
  const repos = ["113", "123"]
  return (
    <section className="projects">
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
