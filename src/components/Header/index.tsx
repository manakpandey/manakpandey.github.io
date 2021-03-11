import React from "react"
import { Link } from "gatsby"

import "./index.scss"
import { Para } from "../../primitives/Typography"

export default function Header() {
  return (
    <header className="mp-navbar">
      <div className="mp-navbar_logo">
        <Link to="/">LOGO</Link>
      </div>
      <div className="mp-navbar_nav">
        <Para>
          <Link to="#about">About</Link>
        </Para>
        <Para>
          <Link to="#projects">Projects</Link>
        </Para>
      </div>
    </header>
  )
}
