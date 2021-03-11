import { ImageFormat, StaticImage } from "gatsby-plugin-image"
import React from "react"
import Github from "../../icons/github"
import { Heading, Para, SubHeading } from "../../primitives/Typography"
import "./index.scss"

export default function Projects() {
  const projects = [
    {
      name: "Vote-at-MUN",
      link: "https://github.com/VITCMUN/vote-at-mun",
      yt: "https://youtu.be/RR8s1OnV2Jw",
      description: `A real-time voting system for VITC-Model United Nations using
      GraphQL. The maximum voters supposed to vote at a given time are
      about 200 in number.`,
    },
    {
      name: "Menuplait",
      link: "https://github.com/manakpandey/menuplait",
      description: `A web-based solution for restaurants to accept dine-in orders. It gives the restaurant flexibility
      to change the menu on-the-go. It also helps to reduce human error while taking orders, thus
      increasing the satisfaction rate of the customers.`,
    },
    {
      name: "Revvit",
      link: "https://github.com/manakpandey/revvit",
      description: `An Android app for all students of VIT to access their daily class schedule and post reviews of professors with a Firebase backend.`,
    },
    {
      name: "eMonopoly",
      link: "https://github.com/manakpandey/eMonopoly",
      description: `A web-based banking platform on a local server for Monopoly built on Python. It replaces the use of physical currency in the game with a Monopoly bank account for each player which can be accessed from a mobile, tablet or a computer. The system supports any number of players.`,
    },
  ]

  return (
    <div className={"mp-projects_wrapper"} id={"projects"}>
      <div className={"mp-projects"}>
        <Heading color={"#fff"}>Projects</Heading>
        {projects.map(project => (
          <div className={"mp-projects_section"}>
            <SubHeading color="#fff">
              {project.name}{" "}
              <a href={project.link} target="_blank">
                <Github color={"#fff"} size={18} />
              </a>
            </SubHeading>
            <Para color={"#fff"}>
              {project.description}{" "}
              {project.yt ? (
                <a
                  href={project.yt}
                  target="_blank"
                  style={{ textDecoration: "none", color: "#b58e58" }}
                >
                  (Preview)
                </a>
              ) : (
                ""
              )}
            </Para>
          </div>
        ))}
      </div>
    </div>
  )
}
