import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"


const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h1>I'm Razak. I build things for the web.</h1>
      <p>Need a Developer? </p><Link to="/contact/">Get in Touch</Link>
    </Layout>
  )
}

export default IndexPage
