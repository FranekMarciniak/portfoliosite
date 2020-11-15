import React from "react"
import "../styles/intro.scss"
import Picture from "../images/blank-profile-picture.png"
function Intro() {
  return (
    <section className="intro">
      <div className="intro__wrapper">
        <div className="intro__text__wrapper">
          <h2>Hey, my name is Franek</h2>
          <p className="intro__paragraph">
            Thanks for visting my page! Below you can find information about me
            and my projects. If you wanna contact me, shoot me an email. Have a
            great day
          </p>
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
