import React, { useState } from "react"

interface IProps {
  size?: number
  margin?: number
}

export default function LinkedIn({ size = 16, margin = 8 }: IProps) {
  const [hovered, setHover] = useState(false)

  return (
    <div
      style={{ width: size, height: size, margin: margin }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 382 382"
      >
        <title>LinkedIn</title>
        <path
          d="M347.45,0H34.56A34.56,34.56,0,0,0,0,34.56V347.44A34.56,34.56,0,0,0,34.56,382H347.44A34.56,34.56,0,0,0,382,347.44V34.56A34.55,34.55,0,0,0,347.45,0ZM118.21,329.84a10.05,10.05,0,0,1-10.06,10.06H65.35a10.05,10.05,0,0,1-10.06-10.06V150.4a10.05,10.05,0,0,1,10.06-10.05h42.8a10.05,10.05,0,0,1,10.06,10.05ZM86.75,123.43a40.67,40.67,0,1,1,40.66-40.66A40.67,40.67,0,0,1,86.75,123.43ZM341.91,330.65a9.25,9.25,0,0,1-9.25,9.25H286.73a9.25,9.25,0,0,1-9.25-9.25V246.49c0-12.56,3.69-55-32.81-55-28.31,0-34,29.07-35.2,42.11v97.08a9.25,9.25,0,0,1-9.25,9.25H155.8a9.25,9.25,0,0,1-9.25-9.25V149.59a9.25,9.25,0,0,1,9.25-9.24h44.42a9.25,9.25,0,0,1,9.25,9.24v15.66c10.49-15.76,26.09-27.91,59.31-27.91,73.55,0,73.13,68.71,73.13,106.47v86.84Z"
          fill={!hovered ? "#191919" : "#b58e58"}
        />
      </svg>
    </div>
  )
}
