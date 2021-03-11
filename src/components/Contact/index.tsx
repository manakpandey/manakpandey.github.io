import React, { useLayoutEffect, useState } from "react"
import { Display, Heading, Para, SubHeading } from "../../primitives/Typography"
import "./index.scss"

export default function Contact() {
  const [ws, setWs] = useState(window.innerWidth)

  useLayoutEffect(() => {
    function updateSize() {
      setWs(window.innerWidth)
    }
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className={"mp-contact_wrapper"} id={"contact"}>
      <div className={"mp-contact"}>
        {ws >= 1320 ? (
          <Display>
            <a
              href="mailto:manak.pandey@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span className="mp-highlight">manak.</span>pandey@gmail.com
            </a>
          </Display>
        ) : (
          <SubHeading>
            <a
              href="mailto:manak.pandey@gmail.com"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span className="mp-highlight">manak.</span>pandey@gmail.com
            </a>
          </SubHeading>
        )}
      </div>
    </div>
  )
}
