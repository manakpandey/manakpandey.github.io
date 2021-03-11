import * as React from "react"
import "../scss/_global.scss"

import SEO from "../components/utils/seo"
import Landing from "../components/Landing"
import Footer from "../components/Footer"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"

const IndexPage = () => {
  return (
    <div className={"mp-global"}>
      <SEO title="Portfolio" />
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default IndexPage
