import React from "react"
import Project from "../images/Project.jpg"
import Image from "../components/image"
import { Link } from "gatsby"

function ProjectCard() {
  return (
    <div className="card">
      <div className="card__image__wrapper">
        <img src={Project} />
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
        <Link href="#">Live demo</Link>
        <Link href="#">View on github</Link>
      </div>
    </div>
  )
}

export default ProjectCard
