import React from "react"
import "../styles/about.scss"

function About({ data }) {
  return (
    <section className="about">
      <div className="about__wrapper">
        <h2>Things I'm working on </h2>
        <p className="text--paragraph">
          Here are some posts about my recent and current projects:
        </p>
        <h4>In progress.....</h4>
      </div>
    </section>
  )
}

export default About
