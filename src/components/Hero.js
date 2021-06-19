import React from "react"

function Hero() {
  return (
    <div class="text-gray-700">
      <div class="container mx-auto mt-40 py-30">
        <div class="ml-10 text-center md:text-left">
          <h1 class="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
            <span class="block xl:inline">コンテンツに恩返しを。</span>
            <span
              contentEditable="true"
              class="block xl:inline mt-4 text-2xl text-gray-600"
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
