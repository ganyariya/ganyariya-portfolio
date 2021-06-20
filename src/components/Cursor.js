import React, { useLayoutEffect, useState } from "react"
// https://github.com/oielbanna/react-cursor-follow/blob/master/src/cursor.js

const base = {
  "pointer-events": "none",
  "user-select": "none",
  display: "block",
  position: "fixed",
  transform: "translate(-50%, -50%)",
  "border-radius": "100%",
  "z-index": 1,
}

const Cursor = ({
  pulse = false,
  size = 23,
  largeSize = 100,
  hollow = false,
  color = "black",
  opacity = 1,
  easing = "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
  duration = 0.4,
  custom = false,
  blendMode = "normal",
  ...rest
}) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [circleSize, setCircleSize] = useState(size)
  const [clicked, setClicked] = useState(false)

  useLayoutEffect(() => {
    document.onmousemove = event => {
      setX(event.clientX)
      setY(event.clientY)
    }
    document.onclick = () => {
      setClicked(!clicked)
      if (clicked) setCircleSize(size)
      else setCircleSize(largeSize)
    }
  }, [clicked])

  const styles = {
    ...base,
    animation: pulse ? "pulse 2s infinite" : null,
    "background-color": hollow ? "transparent" : color,
    border: hollow ? "1px solid " + color : null,
    opacity: opacity,
    width: circleSize + "px",
    height: circleSize + "px",
    top: y,
    left: x,
    transitionTimingFunction: easing,
    transitionDuration: duration + "s",
    mixBlendMode: blendMode,
  }
  return <div id="cursor" {...rest} style={!custom ? styles : null} />
}

export default Cursor
