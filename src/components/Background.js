import React from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"

function Box(props) {
  const mesh = useRef()
  const [active, setActive] = useState(false)
  useFrame((state, delta) => {
    mesh.current.rotation.x += 0.04
    mesh.current.rotation.y += 0.02
  })
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 0.4 : 0.2}
      onClick={event => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="black" />
    </mesh>
  )
}

function Background() {
  return (
    <div className="relative">
      <div className="h-screen w-full fixed">
        <Canvas>
          <Box position={[0, 0, 0]} />
        </Canvas>
      </div>
    </div>
  )
}

export default Background
