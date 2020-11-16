import React from "react"
import Project from "../images/Project.jpg"
function ProjectCard() {
  return (
    <div className="card">
      <div className="card__image__wrapper">
        <img src={Project} alt="" />
      </div>
      <div className="card__text__wrapper">
        <h3>This is title</h3>
        <p className="text--subtitle">Developed in javascript</p>
        <p className="card__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur autem
          iure culpa harum dignissimos
        </p>
      </div>
      <div className="card__buttons">
        <a href="#">Live demo</a>
        <a href="#">View on github</a>
      </div>
    </div>
  )
}

export default ProjectCard
