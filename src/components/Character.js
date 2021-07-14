import React, { useState, useEffect } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Applemusic } from "@icons-pack/react-simple-icons"

function Voice(props) {
  const [state, setState] = useState({
    audio: {},
  })
  useEffect(() => {
    setState({
      audio: new Audio(props.src),
    })
  }, [props.src])
  return (
    <button
      className="p-2"
      onClick={() => {
        state.audio.currentTime = props.currentTime
        state.audio.volume = 0.5
        state.audio.play()
      }}
      alt="ボイスサンプルを再生する"
    >
      <Applemusic size={32} />
    </button>
  )
}

function Character() {
  return (
    <div className="container mx-auto mt-40 font-bold" id="character">
      <section className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-col items-center w-10/12">
          <span className="text-4xl text-gray-800">Character</span>
          <div className="mx-auto mt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <StaticImage
                  src="./../images/ganyariya_transparent.png"
                  alt="ganyariya の画像"
                ></StaticImage>
                <div className="flex justify-center mt-4 mb-4 sm:mb-0">
                  <Voice src="ganyariya.wav" currentTime={0.9} />
                  <Voice src="ganbaru.wav" currentTime={0.5} />
                  <Voice src="wakaranai.wav" currentTime={0.6} />
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left">
                <p>筑波大学の情報系に通う修士 2 年生。</p>
                <p>小さい頃は人と付き合うことが苦手だったらしい。</p>
                <p>
                  最近はかなり吹っ切れており、技術を学びながら楽しく生きている。
                </p>
                <p>好きなものは 開発・競技プログラミング・アニメ・ゲーム。</p>
                <p>
                  RainyBlueBell・電波少女・Fake Type
                  などのネットラップをよく聞いている．
                </p>
                <p>卯月コウ & おりコウを推している。</p>
                <p className="mt-2">
                  自分を支えてくれたコンテンツに恩返しがしたい。
                </p>

                <div className="flex flex-col justify-center mt-8">
                  <span>Qualification</span>
                  <ul className="list-disc list-inside">
                    <li>TOEIC 925</li>
                    <li>基本情報技術者試験 合格</li>
                    <li>応用情報技術者試験 合格</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Character
