import React, { useEffect, useState } from "react"
// https://github.com/oielbanna/react-cursor-follow/blob/master/src/cursor.js

const base = {
  pointerEvents: "none",
  userSelect: "none",
  display: "block",
  position: "fixed",
  transform: "translate(-50%, -50%)",
  borderRadius: "100%",
  zIndex: 1,
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

  useEffect(() => {
    document.onmousemove = event => {
      setX(event.clientX)
      setY(event.clientY)
    }
    document.onclick = event => {
      let node = document.elementFromPoint(event.x, event.y)
      if (
        node.getAttribute("onclick") != null ||
        node.getAttribute("href") != null
      )
        return
      setClicked(!clicked)
      if (clicked) setCircleSize(size)
      else setCircleSize(largeSize)
    }
  }, [clicked, size, largeSize])

  const styles = {
    ...base,
    animation: pulse ? "pulse 2s infinite" : null,
    backgroundColor: hollow ? "transparent" : color,
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
