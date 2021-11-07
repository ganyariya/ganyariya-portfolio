import React from "react"

const Footer = () => {
  return (
    <div className="container mx-auto px-6 mt-40">
      <div className="mt-32 border-t-2 border-gray-700 flex flex-col items-center">
        <div className="sm:w-2/3 text-center py-6">
          <img
            className="mx-auto h-12 mb-4"
            src="https://count.getloli.com/get/@ganyariya-portfolio?theme=rule34"
            alt="ganyariya-portfolio"
          />
          <div className="text-sm text-gray-800 font-bold mb-2">
            © 2021 by ganyariya
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
