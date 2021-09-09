import React from "react"
import Typing from "react-typing-animation"

const Hero = () => {
  return (
    <div className="container relative">
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
