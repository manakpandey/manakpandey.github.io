import React, { useState } from "react"

interface IProps {
  size?: number
  margin?: number
}

export default function Github({ size = 16, margin = 8 }: IProps) {
  const [hovered, setHover] = useState(false)

  return (
    <div
      style={{ width: size, height: size, margin: margin }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <svg
        id="f0b46231-a1f6-4958-914c-2e81ae41ffba"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32.58 31.77"
      >
        <title>GitHub</title>
        <path
          d="M152.61,107.44a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.36,1.11-.79s0-1.41,0-2.77c-4.53,1-5.49-2.18-5.49-2.18a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8.05a6.3,6.3,0,0,1,1.67-4.37,5.93,5.93,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67a5.9,5.9,0,0,1,.17,4.31,6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.79a16.3,16.3,0,0,0-5.16-31.75Z"
          transform="translate(-136.32 -107.44)"
          fill={!hovered ? "#191919" : "#b58e58"}
          fillRule="evenodd"
        />
      </svg>
    </div>
  )
}
