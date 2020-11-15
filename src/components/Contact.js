import React from "react"
import "../styles/contact.scss"
function Contact() {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <h2>Work with me</h2>
        <p className="text--paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus in
          velit, totam vero saepe consectetur harum ducimus obcaecati odio illo
          explicabo!
        </p>
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
