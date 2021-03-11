import React from "react"

import "./index.scss"

interface IProps {
  children: React.ReactNode
  color?: string
}

export function Display({ children, color }: IProps) {
  return (
    <div className="mp-display" style={color ? { color: color } : undefined}>
      {children}
    </div>
  )
}

export function Heading({ children, color }: IProps) {
  return (
    <div className="mp-heading" style={color ? { color: color } : undefined}>
      {children}
    </div>
  )
}

export function SubHeading({ children, color }: IProps) {
  return (
    <div
      className="mp-sub_heading"
      style={color ? { color: color } : undefined}
    >
      {children}
    </div>
  )
}

export function Para({ children, color }: IProps) {
  return (
    <div className="mp-para" style={color ? { color: color } : undefined}>
      {children}
    </div>
  )
}
