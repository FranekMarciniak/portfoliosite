import React, { useContext } from "react"
import "../styles/contact.scss"
import { SiteContext } from "../context/siteState"
function Contact({ data }) {
  const siteContext = useContext(SiteContext)
  const { setName, setMessage, setEmail, currentState } = siteContext

  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h2>{data.title}</h2>
        <p className="text--paragraph">{data.body}</p>
        <form
          action=""
          className="contact__form"
          onSubmit={e => {
            e.preventDefault()
          }}
          name="Contact Form"
          method="POST"
          data-netlify="true"
        >
          <div className="contact__input__wrapper">
            <input
              type="text"
              className="contact__input"
              required
              value={currentState.name}
              onChange={e => setName(e.target.value)}
            />
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
              onChange={e => setEmail(e.target.value)}
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
              onChange={e => setMessage(e.target.value)}
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
