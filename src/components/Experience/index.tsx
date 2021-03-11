import React from "react"
import { Heading, Para, SubHeading } from "../../primitives/Typography"
import "./index.scss"

export default function Experience() {
  return (
    <div className={"mp-experience_wrapper"} id={"experience"}>
      <div className={"mp-experience"}>
        <Heading>Experience</Heading>

        <div className={"mp-experience_section"}>
          <SubHeading>
            <span className="mp-highlight">SDE Intern</span> at Gmetri XR
          </SubHeading>
          <Para>
            Worked alongside an awesome team, building highly scalable
            applications and fixing bugs along the way.
            <br />
            <span style={{ fontWeight: 400 }}>May 2020 - Nov 2020</span>
          </Para>
        </div>
        <div className={"mp-experience_section"}>
          <SubHeading>
            <span className="mp-highlight">Research</span> on Data Compression
          </SubHeading>
          <Para>
            M. Pandey, S. Shrivastava, S. Pandey and S. Shridevi, "An Enhanced
            Data Compression Algorithm," 2020 International Conference on
            Emerging Trends in Information Technology and Engineering
            (ic-ETITE), Vellore, India, 2020, pp. 1-4, doi:
            <a
              href="https://ieeexplore.ieee.org/document/9077887"
              style={{ color: "#b58e58" }}
              target="_blank"
            >
              10.1109/ic-ETITE47903.2020.223
            </a>
            .
          </Para>
        </div>
      </div>
    </div>
  )
}
