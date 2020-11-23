import React from "react"
import "../styles/about.scss"

function About({ data }) {
  return (
    <section className="about">
      <div className="about__wrapper">
        <h2>{data.title}</h2>
        <p
          className="text--paragraph"
          dangerouslySetInnerHTML={{ __html: data.body }}
        ></p>
      </div>
    </section>
  )
}

export default About
