import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <>
      {/* <Header data={data} /> */}
      <div>
        <main>{children}</main>
        <footer
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: "14px",
            marginTop: "40px",
            backgroundColor: "#1d1d1d",
            padding: "10px",
            letterSpacing: "1px",
            textAlign: "center",
          }}
        >
          developed in Gatsby by Franek Marciniak more on the project here
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
