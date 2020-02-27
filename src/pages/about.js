import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
    return (
        <Layout>
            <h1>This is my About page</h1>
            <p>Get to know me.</p>
            <Link to="/contact/">Get in touch</Link>
        </Layout>
    )
}

export default AboutPage