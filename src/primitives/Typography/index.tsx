import React from "react"

import "./index.scss"

export enum TextAlign {
  center = "center",
  left = "left",
  right = "right",
  justify = "justify",
}
interface IProps {
  children: React.ReactNode
  color?: string
  align?: TextAlign
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

export function SubHeading({ children, color, align=TextAlign.center }: IProps) {
  return (
    <div
      className={`mp-sub_heading mp-align_${align}`}
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
