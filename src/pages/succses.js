import React from "react"
import { Redirect } from "@reach/router"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/error.scss"
import { Link } from "gatsby"
const Succses = () => (
  <>
    <SEO title="Message send!" />
    <div className="error">
      <div className="error__wrapper">
        <h1>Message send! I will respond ASAP </h1>
        <Link to={"/"}>
          <button className="btn">Go home!</button>
        </Link>
      </div>
    </div>
  </>
)

export default Succses
