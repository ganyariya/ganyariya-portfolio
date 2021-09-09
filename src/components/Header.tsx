import React from "react"
import Helmet from "react-helmet"

const Header = () => {
  return (
    <>
      <Helmet>
        <html lang="ja" />
        <title>ganyariya</title>
        <meta name="description" content="ganyariya's portfolio" />
        <meta name="robots" content="all" />
        {/* OGP */}
        <head prefix="og: http://ogp.me/ns#" />
        <meta property="og:url" content="https://ganyariya.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ganariya's portfolio" />
        <meta property="og:description" content="ganariya's portfolio" />
        <meta property="og:site_name" content="ganariya's portfolio" />
        <meta
          property="og:image"
          content="https://i.gyazo.com/a44f7c81df21d93f8b7c3d15ba97d52f.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ganyariya" />
        <meta name="twitter:creator" content="@ganyariya" />
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
