import React from "react"
import Typing from "react-typing-animation"
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

function Hero() {
  return (
    <div className="container relative">
      <div className="h-screen w-full absolute">
        <Canvas>
          <Box position={[0, -2, 0]} />
        </Canvas>
      </div>

      <div className="h-screen flex justify-center flex-col items-center md:items-start">
        <h1 className="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl md:ml-20">
          <Typing speed={80} className="block ">
            猫と和解せよ。
            <Typing.Delay ms={11000} />
            <Typing.Backspace count={10} />
            猫デ和解セヨ。
          </Typing>
          <Typing
            speed={80}
            className="block  mt-4 text-2xl text-gray-700 mb-60"
          >
            <Typing.Delay ms={2500} />
            ここにテキストを入力...
            <Typing.Delay ms={1500} />
            <Typing.Backspace count={10} />
            <Typing.Delay ms={2000} />
            人生を入力。
          </Typing>
        </h1>
      </div>
    </div>
  )
}

export default Hero
