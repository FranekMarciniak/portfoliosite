import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import About from "../components/About"
import Projects from "../components/Projects"
import "../styles/reset.css"
import "../styles/global.scss"
import SiteContext from "../context/siteState"

const IndexPage = () => {
  return (
    <SiteContext>
      <Layout>
        <SEO title="Home" />
        <Intro />
        <About />
        <Projects />
      </Layout>
    </SiteContext>
  )
}

export default IndexPage
