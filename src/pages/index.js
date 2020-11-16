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
import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const query = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                id
              }
              rawMarkdownBody
            }
          }
        }
      }
    `
  )
  const data = query.allMarkdownRemark.edges.map(blob => {
    return {
      title: blob.node.frontmatter.title,
      body: blob.node.rawMarkdownBody,
      id: blob.node.frontmatter.id,
    }
  })
  return (
    <SiteContext>
      <Layout>
        <SEO title="Home" />
        <Intro data={data.find(blob => blob.id === "intro")} />
        <About data={data.find(blob => blob.id === "about")} />
        <Projects data={[1, 2]} />
        <Skills data={data.find(blob => blob.id === "tech")} />
        <Contact data={data.find(blob => blob.id === "contact")} />
      </Layout>
    </SiteContext>
  )
}

export default IndexPage
