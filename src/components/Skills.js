import React from "react"
import "../styles/skills.scss"
import { FaJsSquare, FaReact, FaPython } from "react-icons/fa"
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
                title="javascript"
                value={{ style: { color: "black" } }}
              />
            </div>
            <div className="skill__card">
              <FaPython title="python" value={{ style: { color: "black" } }} />
            </div>
            <div className="skill__card">
              <FaReact title="react" value={{ style: { color: "black" } }} />
            </div>
            <div className="skill__card">
              {" "}
              <GrGatsbyjs
                title="gatsbyjs"
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
