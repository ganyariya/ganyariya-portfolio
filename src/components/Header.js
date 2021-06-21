import React from "react"
import Helmet from "react-helmet"

function Header() {
  return (
    <>
      <Helmet>
        <title>ganyariya</title>
        <meta name="description" content="ganyariya's portfolio" />
        <meta name="robots" content="all" />
        <html lang="ja" />
      </Helmet>
      <header className="text-gray-600 font-bold">
        <div className="container mx-auto flex flex-wrap px-0 py-6 flex-col md:flex-row items-center">
          <a href="/" className="flex items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-1 text-xl">ganyariya</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a href="#story" className="mr-8 hover:text-gray-900">
              Story
            </a>
            <a href="#character" className="mr-8 hover:text-gray-900">
              Character
            </a>
            <a href="#works" className="mr-8 hover:text-gray-900">
              Works
            </a>
            <a href="#links" className="mr-5 hover:text-gray-900">
              Links
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header
