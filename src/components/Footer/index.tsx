import React from "react"
import { Link } from "gatsby"

import "./index.scss"
import { Para } from "../../primitives/Typography"

export default function Footer() {
  return (
    <footer className="mp-footer">
      <Para color={"#fff"}>© {new Date().getFullYear()}, Manak Pandey</Para>
    </footer>
  )
}
