import * as React from "react"
import { Link } from "gatsby"
import { StaticImage, ImageFormat } from "gatsby-plugin-image"

import "../scss/_global.scss"

import SEO from "../components/utils/seo"
import Landing from "../components/Landing"
import Header from "../components/Header"

const IndexPage = () => (
  <div className={"mp-global"}>
    <SEO title="Home" />
    <Header />
    <Landing />
    {/* <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={[
        "AUTO" as ImageFormat,
        "WEBP" as ImageFormat,
        "AVIF" as ImageFormat,
      ]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    /> */}
  </div>
)

export default IndexPage
