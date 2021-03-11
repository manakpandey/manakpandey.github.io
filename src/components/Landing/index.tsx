import React from "react"

import "./index.scss"
import { Display, Para, SubHeading } from "../../primitives/Typography"
import Github from "../../icons/github"
import LinkedIn from "../../icons/linkedin"
import Header from "../Header"

export default function Landing() {
  return (
    <div className="mp-landing">
      <Header />

      <div className="mp-landing_content">
        <SubHeading>Hello, World.</SubHeading>
        <div className="mp-reveal">
          <Display>
            I'm <span className="mp-highlight">Manak</span> Pandey
          </Display>
        </div>
        <Para>| Software Engineer |</Para>
      </div>

      <div className="mp-landing_links">
        <a href="https://github.com/manakpandey/" target="_blank">
          <Github size={32} />
        </a>
        <span style={{ width: 12 }} />
        <a href="https://www.linkedin.com/in/manakpandey/" target="_blank">
          <LinkedIn size={32} />
        </a>
      </div>
    </div>
  )
}
