import * as React from "react"
import "../scss/_global.scss"

import SEO from "../components/utils/seo"
import Landing from "../components/Landing"
import Footer from "../components/Footer"
import About from "../components/About"
import Experience from "../components/Experience"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import MobileNav from "../components/MobileNav"

const IndexPage = () => {
  const [ws, setWs] = React.useState<number>(1080)

  React.useLayoutEffect(() => {
    function updateSize() {
      setWs(window.innerWidth)
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className={"mp-global"}>
      <SEO title="Portfolio" description="Portfolio of Manak Pandey"/>
      <Landing />
      <About />
      <Experience />
      <Projects />
      <Contact ws={ws} />
      <Footer />
      {ws <= 768 ? <MobileNav /> : null}
    </div>
  )
}

export default IndexPage
