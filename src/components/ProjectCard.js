import React from "react"
import { Link } from "gatsby"
function ProjectCard({ repo }) {
  return (
    <div className="card">
      <div className="card__image__wrapper">
        <img src={repo.frontmatter.Image} alt="live project" />
      </div>
      <div className="card__text__wrapper">
        <h3>{repo.frontmatter.title}</h3>
        <p className="text--subtitle">{repo.frontmatter.Developed}</p>
        <p className="card__text">{repo.rawMarkdownBody}</p>
      </div>
      <div className="card__buttons">
        <Link to={repo.frontmatter.Live}>Live demo</Link>
        <Link to={repo.frontmatter.Github}>View on github</Link>
      </div>
    </div>
  )
}

export default ProjectCard
