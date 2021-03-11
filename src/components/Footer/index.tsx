import React from "react"

import "./index.scss"
import { Para } from "../../primitives/Typography"
import Github from "../../icons/github"
import LinkedIn from "../../icons/linkedin"

export default function Footer() {
  return (
    <footer className="mp-footer">
      <div className="mp-footer_links">
        <a href="https://github.com/manakpandey/" target="_blank">
          <Github size={24} color={"#fff"} />
        </a>
        <span style={{ width: 12 }} />
        <a href="https://www.linkedin.com/in/manakpandey/" target="_blank">
          <LinkedIn size={24} color={"#fff"} />
        </a>
      </div>
      <Para color={"#fff"}>© {new Date().getFullYear()}, Manak Pandey</Para>
    </footer>
  )
}
