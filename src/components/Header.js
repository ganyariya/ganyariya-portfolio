import React from "react"

function Header() {
  return (
    <header class="text-gray-500 body-font">
      <div class="container mx-auto flex flex-wrap px-0 py-6 flex-col md:flex-row items-center">
        <a
          href="/"
          class="flex font-medium items-center text-gray-900 mb-4 md:mb-2"
        >
          <span class="ml-1 text-xl">ganariya</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a href="#story" class="mr-5 hover:text-gray-900">
            Story
          </a>
          <a href="#character" class="mr-5 hover:text-gray-900">
            Character
          </a>
          <a href="#works" class="mr-5 hover:text-gray-900">
            Works
          </a>
          <a href="#links" class="mr-5 hover:text-gray-900">
            Links
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
