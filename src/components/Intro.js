import React from "react"
import "../styles/intro.scss"
import Picture from "../images/blank-profile-picture.png"
import { Link } from "gatsby"
import Image from "./image"
function Intro({ data }) {
  return (
    <section className="intro">
      <div className="intro__wrapper">
        <div className="intro__text__wrapper">
          <h2>{data.title}</h2>
          <p className="intro__paragraph">{data.body}</p>
          <Link to="/projectsPage">
            <button className="btn btn--intro btn--secondary">
              My projects
            </button>
          </Link>
        </div>
        <div className="intro__photo_wrapper">
          <Image img={Picture} />
        </div>
      </div>
    </section>
  )
}

export default Intro
