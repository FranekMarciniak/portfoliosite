import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/error.scss"
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="error">
      <div className="error__wrapper">
        <h1>Heeey</h1>
        <p>I don't know what are you looking for ¯\_(ツ)_/¯ </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
