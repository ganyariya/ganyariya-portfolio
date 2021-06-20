import * as React from "react"
import PadContainer from "../components/PadContainer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Story from "../components/Story"

// https://github.com/innocenzi/tailwindcss-scroll-snap

const IndexPage = () => (
  <div>
    <PadContainer>
      <Header />
      <Hero />
      <Story />
    </PadContainer>
  </div>
)

export default IndexPage
