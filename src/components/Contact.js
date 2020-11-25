import React, { useContext } from "react"
import "../styles/contact.scss"
function Contact({ data }) {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h2>{data.title}</h2>
        <p className="text--paragraph">{data.body}</p>
        <form
          className="contact__form"
          name="contactform"
          method="post"
          action="/succses"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="bot-field" />
          <div className="contact__input__wrapper">
            <input type="text" className="contact__input" required />
            <label htmlFor="name" className="input__label">
              Name
            </label>
          </div>
          <div className="contact__input__wrapper">
            <input
              name="email"
              type="text"
              className="contact__input"
              required
            />
            <label htmlFor="email" className="input__label">
              Email
            </label>
          </div>
          <div className="contact__input__wrapper">
            <textarea
              type="text"
              className="contact__input"
              style={{ height: "115px" }}
              name="message"
              required
            />
            <label htmlFor="message" className="input__label textarea--label">
              Message
            </label>
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
