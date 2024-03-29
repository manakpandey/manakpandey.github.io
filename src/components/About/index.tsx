import "./index.scss"

import {
  Heading,
  Para,
  SubHeading,
  TextAlign,
} from "../../primitives/Typography"
import { ImageFormat, StaticImage } from "gatsby-plugin-image"

import React from "react"

export default function About() {
  const iconOptions = {
    width: 48,
    quality: 100,
  }

  return (
    <div className={"mp-about_wrapper"} id={"about"}>
      <div className={"mp-about"}>
        <div className={"mp-about_section"}>
          <Heading color="#fff">About</Heading>
          <div className={"mp-about_bio"}>
            <StaticImage
              src="../../images/dp.jpeg"
              width={250}
              quality={95}
              formats={[
                "auto" as ImageFormat,
                "webp" as ImageFormat,
                "avif" as ImageFormat,
              ]}
              alt="Profile Picture"
              style={{ borderRadius: "30%", minWidth: 200 }}
            />
            <span style={{ width: "100px", height: "64px" }} />
            <Para color={"#fff"}>
              The go-to guy for finding technical solutions to problems.
              <br />
              <br />
              I am an explorer traversing the world and technology. I thrive on learning new technologies and frameworks, constantly seeking opportunities to expand my skill set and stay at the forefront of industry trends.              <br />
              <br />
              Let's connect and explore how we can collaborate to bring cutting-edge solutions to life!
            </Para>
          </div>
        </div>

        <div className={"mp-about_section"}>
          <SubHeading color="#fff" align={TextAlign.center}>
            Languages & Frameworks
          </SubHeading>
          <div className={"mp-about_skills"}>
            <StaticImage
              src="../../images/cpp.png"
              alt="C++"
              title="C++"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/java.png"
              alt="Java"
              title="Java"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/python.png"
              alt="Python"
              title="Python"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/go.png"
              alt="Golang"
              title="Golang"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/js.png"
              alt="JavaScript"
              title="JavaScript"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/ts.png"
              alt="TypeScript"
              title="TypeScript"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/node.png"
              alt="Node.js"
              title="Node.js"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/react.png"
              alt="React"
              title="React"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/gql.png"
              alt="GraphQL"
              title="GraphQL"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/pg.png"
              alt="Postgresql"
              title="Postgresql"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/mongo.png"
              alt="MongoDB"
              title="MongoDB"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/docker.png"
              alt="Docker"
              title="Docker"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/k8s.png"
              alt="Kubernetes"
              title="Kubernetes"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/android.png"
              alt="Android"
              title="Android"
              {...iconOptions}
            />
            <StaticImage
              src="../../images/firebase.png"
              alt="Firebase"
              title="Firebase"
              {...iconOptions}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
