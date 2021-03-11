import React from "react"
import { Link } from "gatsby"

import "./index.scss"
import { Display, Para, SubHeading } from "../../primitives/Typography"
import Github from "../../icons/github"
import LinkedIn from "../../icons/linkedin"

export default function Landing() {
  return (
    <div className="mp-landing">
      <SubHeading>Hello, World.</SubHeading>
      <Display>I'm Manak Pandey</Display>
      <Para>| Software Engineer |</Para>

      <div className="mp-landing_links">
        <Github size={32} />
        <LinkedIn size={32} />
      </div>
    </div>
  )
}
