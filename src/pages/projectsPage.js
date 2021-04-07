import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"
import Header from "../components/Header"

function projects() {
  return (
    <>
      <Header />
      <Layout>
        <SEO title="projects" />
        <Projects page="whole" fav={false} data={[1, 2, 3, 4, 5]} />
        <footer
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: "14px",
            backgroundColor: "#1d1d1d",
            padding: "10px",
            marginTop: "450px",
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

export default projects
