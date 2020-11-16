import React from "react"
import "../styles/contact.scss"
import { useStaticQuery, graphql } from "gatsby"

function Contact({ data }) {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h2>{data.title}</h2>
        <p className="text--paragraph">{data.body}</p>
        <form
          action=""
          className="contact__form"
          method="POST"
          data-netlify="true"
        >
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
