import React from "react"
import "../styles/intro.scss"
import Picture from "../images/blank-profile-picture.png"
function Intro({ data }) {
  return (
    <section className="intro">
      <div className="intro__wrapper">
        <div className="intro__text__wrapper">
          <h2>{data.title}</h2>
          <p className="intro__paragraph">{data.body}</p>
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
