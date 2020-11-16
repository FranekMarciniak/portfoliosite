import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/Projects"
function projects() {
  return (
    <Layout>
      <SEO title="projects" />
      <Projects data={[1, 2, 3, 4, 5]} />
    </Layout>
  )
}

export default projects
