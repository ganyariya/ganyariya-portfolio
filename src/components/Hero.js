import React from "react"

function Hero() {
  return (
    <div className="text-gray-700 mt-60 mb-60">
      <div className="container mx-auto py-30 w-10/12">
        <div className=" text-center md:text-left">
          <h1 className="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            <span className="block ">コンテンツに恩返しを。</span>
            <span
              contentEditable="true"
              className="block  mt-4 text-2xl text-gray-700"
              suppressContentEditableWarning={true}
            >
              ここにテキストを入力...
            </span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
