import { Link } from "gatsby"
import React, { useState } from "react"
import { SubHeading, Para } from "../../primitives/Typography"
import "./index.scss"

export default function MobileNav() {
  const [active, setActive] = useState(false)

  const toggle = () => setActive(!active)

  return (
    <div className={"mp-mob_nav"}>
      <div className={"mp-mob_nav_fab"} tabIndex={1} onClick={toggle}>
        <svg
          height="24px"
          viewBox="0 -53 384 384"
          width="24px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#fff"
            d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
          />
          <path
            fill="#fff"
            d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
          />
          <path
            fill="#fff"
            d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"
          />
        </svg>
      </div>
      <div className={"mp-mob_nav_menu"} style={{ top: active ? 0 : "100%" }}>
        <SubHeading>
          <Link
            to="/"
            style={{ color: "inherit", textDecoration: "none" }}
            onClick={toggle}
          >
            <span className="mp-highlight">Manak</span> Pandey
          </Link>
        </SubHeading>
        <div className={"mp-mob_nav_items"}>
          <Para>
            <Link to={"#about"} onClick={toggle}>
              About
            </Link>
          </Para>
          <Para>
            <Link to={"#experience"} onClick={toggle}>
              Experience
            </Link>
          </Para>
          <Para>
            <Link to={"#projects"} onClick={toggle}>
              Projects
            </Link>
          </Para>
          <Para>
            <Link to={"#contact"} onClick={toggle}>
              Contact
            </Link>
          </Para>
        </div>
        <Para>
          <a
            href="mailto:manak.pandey@gmail.com"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <span className="mp-highlight">manak.</span>pandey@gmail.com
          </a>
        </Para>
      </div>
    </div>
  )
}
