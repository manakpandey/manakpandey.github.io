import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, ImageFormat } from "gatsby-plugin-image"

import "../scss/_global.scss"

import SEO from "../components/utils/seo"
import Landing from "../components/Landing"
import Header from "../components/Header"
import Footer from "../components/Footer"
import About from "../components/About"
import Experience from "../components/Experience"

const IndexPage = () => {
  return (
    <div className={"mp-global"}>
      <SEO title="Portfolio" />
      <Landing />
      <About />
      <Experience />
      <Footer />
    </div>
  )
}

export default IndexPage
