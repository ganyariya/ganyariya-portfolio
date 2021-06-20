import * as React from "react"
import PadContainer from "../components/PadContainer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Story from "../components/Story"
import Character from "../components/Character"
import Timeline from "../components/Timeline"
import Works from "../components/Works"
import Links from "../components/Links"
import Footer from "../components/Footer"

// https://github.com/innocenzi/tailwindcss-scroll-snap

const IndexPage = () => (
  <div>
    <PadContainer>
      <Header />
      <Hero />
      <Story />
      <Character />
      <Timeline />
      <Works />
      <Links />
      <Footer />
    </PadContainer>
  </div>
)

export default IndexPage
