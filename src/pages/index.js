import * as React from "react"
import PadContainer from "../components/PadContainer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Story from "../components/Story"
import Character from "../components/Character"
import Timeline from "../components/Timeline"

// https://github.com/innocenzi/tailwindcss-scroll-snap

const IndexPage = () => (
  <div>
    <PadContainer>
      <Header />
      <Hero />
      <Story />
      <Character />
      <Timeline />
    </PadContainer>
  </div>
)

export default IndexPage
