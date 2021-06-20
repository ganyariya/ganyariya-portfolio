import React from "react"

function Header() {
  return (
    <header className="text-gray-500 body-font">
      <div className="container mx-auto flex flex-wrap px-0 py-6 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-1 text-xl">ganariya</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#story" className="mr-5 hover:text-gray-900">
            Story
          </a>
          <a href="#character" className="mr-5 hover:text-gray-900">
            Character
          </a>
          <a href="#works" className="mr-5 hover:text-gray-900">
            Works
          </a>
          <a href="#links" className="mr-5 hover:text-gray-900">
            Links
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
