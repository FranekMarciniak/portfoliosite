import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Skills from "../components/Skills"
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
        <Skills />
        <Contact />
      </Layout>
    </SiteContext>
  )
}

export default IndexPage
