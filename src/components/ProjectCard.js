import React from "react"
import Project from "../images/Project.jpg"
import { Link } from "gatsby"

function ProjectCard({ repo }) {
  return (
    <div className="card">
      <div className="card__image__wrapper">
        <img src={repo.frontmatter.Image} />
      </div>
      <div className="card__text__wrapper">
        <h3>{repo.frontmatter.title}</h3>
        <p className="text--subtitle">{repo.frontmatter.Developed}</p>
        <p className="card__text">{repo.rawMarkdownBody}</p>
      </div>
      <div className="card__buttons">
        <Link href={repo.frontmatter.Github}>Live demo</Link>
        <Link href={repo.frontmatter.Live}>View on github</Link>
      </div>
    </div>
  )
}

export default ProjectCard
