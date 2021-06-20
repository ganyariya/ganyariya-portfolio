import React from "react"
import { StaticImage } from "gatsby-plugin-image"

function Character() {
  return (
    <div className="container mx-auto text-gray-800 mt-32" id="character">
      <section className="text-gray-800 body-font">
        <div className="container mx-auto flex flex-col items-center w-10/12">
          <span className="text-4xl text-gray-800">Character</span>
          <div className="mx-auto">
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <StaticImage src="./../images/ganariya_transparent.png"></StaticImage>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-300 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p>筑波大学情報理工学プログラムに所属する修士 2 年生。</p>
                <p>
                  小さい頃は人と付き合うことが苦手だったらしい（今もらしい）。
                </p>
                <p>
                  最近はかなり吹っ切れており、技術を学びながら楽しく生きている。
                </p>
                <p>好きなものは 開発・競技プログラミング・アニメ・ゲーム。</p>
                <p>卯月コウを推している。</p>
                <p className="mt-4">
                  コンテンツに恩返しをするためにエンジニア活動をしている。
                </p>

                {/* <div className="flex flex-col justify-center items-center">
                  <span>コンテスト歴</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Character