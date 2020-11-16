import React from "react"
import "../styles/contact.scss"
import { useStaticQuery, graphql } from "gatsby"

function Contact() {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { id: { eq: "contact" } } }) {
          edges {
            node {
              frontmatter {
                title
              }
              rawMarkdownBody
            }
          }
        }
      }
    `
  )
  const information = query.allMarkdownRemark.edges[0].node
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h2>{information.frontmatter.title}</h2>
        <p className="text--paragraph">{information.rawMarkdownBody}</p>
        <form action="" className="contact__form">
          <div className="contact__input__wrapper">
            <input type="text" placeholder="Name" className="contact__input" />
          </div>
          <div className="contact__input__wrapper">
            <input type="text" placeholder="Email" className="contact__input" />
          </div>
          <div className="contact__input__wrapper">
            <textarea
              type="text"
              className="contact__input"
              style={{ height: "115px" }}
              placeholder="Message"
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div className="contact__button__wrapper">
              <button className="btn btn-small">Send!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
