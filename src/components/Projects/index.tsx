import "./index.scss"

import {
  Heading,
  Para,
  SubHeading,
  TextAlign,
} from "../../primitives/Typography"

import Github from "../../icons/github"
import React from "react"

export default function Projects() {
  const projects = [
    {
      name: "Physiocs",
      link: "https://github.com/manakpandey/physiocs",
      description: `A platform for physiotherapy patients to get the prescribed therapy monitored by computer vision at home.`,
    },
    {
      name: "Yogasaan",
      link: "https://github.com/manakpandey/yogasaan",
      description: `A web-based system which helps the users to improve their yoga poses by scoring them. The system
      provides analytics and a leaderboard which gamifyies the experience and promotes better learning and
      provides motivation.`,
    },
    {
      name: "Vote-at-MUN",
      link: "https://github.com/VITCMUN/vote-at-mun",
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
        {projects.map((project, i) => (
          <div className={"mp-projects_section"} key={i}>
            <SubHeading color="#fff" align={TextAlign.left}>
              {project.name}{" "}
              <a href={project.link} target="_blank">
                <Github color={"#fff"} size={18} />
              </a>
            </SubHeading>
            <Para color={"#fff"}>
              {project.description}{" "}
              {/* {project.yt ? (
                <a
                  href={project.yt}
                  target="_blank"
                  style={{ color: "#b58e58" }}
                >
                  Preview.
                </a>
              ) : (
                ""
              )} */}
            </Para>
          </div>
        ))}
      </div>
    </div>
  )
}
