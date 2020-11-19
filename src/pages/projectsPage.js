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
        <Projects page="whole" fav={true} data={[1, 2, 3, 4, 5]} />
      </Layout>
    </>
  )
}

export default projects
