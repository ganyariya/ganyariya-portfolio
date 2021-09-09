import React from "react"
import {
  Zenn,
  Github,
  Twitter,
  Gmail,
  Qiita,
} from "@icons-pack/react-simple-icons"

// https://zenn.dev/kaito18/articles/95ae3c2ecf09e3
const Links = () => {
  return (
    <div className="container mx-auto text-gray-700 mt-40 font-bold" id="links">
      <div className="flex flex-col justify-center items-center">
        <span className="text-4xl text-gray-800 mb-8">Links</span>
        <div className="w-10/12 mx-auto flex justify-center items-center space-x-8">
          <a
            href="https://github.com/ganyariya/ganyariya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={36}></Github>
          </a>
          <a
            href="https://twitter.com/ganyariya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter size={36}></Twitter>
          </a>
          <a
            href="mailto:ganariya2525@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Gmail size={36}></Gmail>
          </a>
          <a
            href="https://zenn.dev/ganariya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Zenn size={36}></Zenn>
          </a>
          <a
            href="https://qiita.com/ganyariya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Qiita size={36}></Qiita>
          </a>
        </div>
      </div>
    </div>
  )
}
export default Links
