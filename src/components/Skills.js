import React from "react"
import "../styles/skills.scss"
import { FaJsSquare, FaReact, FaSass, FaJava } from "react-icons/fa"
import { GrGatsbyjs } from "react-icons/gr"

function Skills({ data }) {
  return (
    <div className="skills">
      <div className="skills__wrapper">
        <h2>{data.title}</h2>
        <p className="text--paragraph">{data.body}</p>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <div className="skills__list">
            <div className="skill__card">
              <FaJsSquare
                title="logo icon"
                value={{ style: { color: "black" } }}
              />
            </div>
            <div className="skill__card">
              <FaJava title="logo icon" value={{ style: { color: "black" } }} />
            </div>
            <div className="skill__card">
              <FaReact
                title="logo icon"
                value={{ style: { color: "black" } }}
              />
            </div>
            <div className="skill__card">
              <FaSass title="logo icon" value={{ style: { color: "black" } }} />
            </div>
            <div className="skill__card">
              {" "}
              <GrGatsbyjs
                title="logo icon"
                value={{ style: { color: "black" } }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
