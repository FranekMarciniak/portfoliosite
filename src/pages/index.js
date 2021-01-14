import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Skills from "../components/Skills"
import "../styles/reset.css"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../components/Header"
import "../styles/global.scss"

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
    <>
      <Header />
      <Layout>
        <SEO title="Home" />
        <Intro data={data.find(blob => blob.id === "intro")} />
        <About data={data.find(blob => blob.id === "about")} />
        <Projects
          fav={true}
          data={data.find(blob => blob.id === "projects-info")}
        />
        <Skills data={data.find(blob => blob.id === "tech")} />
        <Contact data={data.find(blob => blob.id === "contact")} />
        <footer
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: "14px",
            backgroundColor: "#1d1d1d",
            padding: "10px",
            marginTop: "50px",
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          developed in Gatsby by Franek Marciniak more on the project here
        </footer>
      </Layout>
    </>
  )
}

export default IndexPage
