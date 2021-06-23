import React from "react"

function Card(props) {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="bg-white rounded-none p-6 border-4 border-black">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img
            loading="lazy"
            decoding="async"
            src={`/${props.src}`}
            alt={props.alt}
            className="h-48 w-full object-cover object-center mb-8"
          />
          <h3 className="tracking-wide text-gray-800 text-xl font-bold">
            {props.title}
          </h3>
          <p className="leading-relaxed text-gray-700 text-base mt-4">
            {props.description}
          </p>
        </a>
      </div>
    </div>
  )
}

function Works() {
  return (
    <div className="container mx-auto text-gray-700 mt-40 font-bold" id="works">
      <div className="flex flex-col justify-center items-center px-8">
        <span className="text-4xl text-gray-800 mb-8">Works</span>
        <div className="flex flex-wrap mx-2">
          <Card
            title="Portfolio"
            src="portfolio.jpg"
            alt="Portfolio"
            description="ポートフォリオサイト"
            link="https://ganariya.netlify.app/"
          />
          <Card
            title="Tweet"
            src="tweet.jpg"
            alt="Tweet CLI ライブラリ"
            description="ツイートだけできるCLI"
            link="https://github.com/Ganariya/tweet"
          />
          <Card
            title="Un/t/a/i/l"
            src="under.gif"
            alt="Undertale"
            description="Uxxl ぽいもの(授業課題)"
          />
          <Card
            title="けもフレパズル"
            src="kemohure.jpg"
            alt="けもフレパズル"
            description="Easy To Play!"
            link="https://www.youtube.com/watch?v=85Mms91TkM8"
          />
          <Card
            title="Splat/o/o/n"
            src="spla.gif"
            alt="Splatoon"
            description="Blenderと動画制作"
          />
          <Card
            title="AtCoder Action"
            src="github_action.jpg"
            alt="AtCoder README Action"
            description="Solved GitHub Action"
            link="https://github.com/Ganariya/atcoder-readme-action"
          />
          <Card
            title="C-Notification"
            src="codeforces.jpg"
            alt="Codeforces Notification"
            description="Submit 結果を通知する"
            link="https://chrome.google.com/webstore/detail/codeforces-notification/jglachhdagmpdpplklfanbooafbmkddn?hl=ja"
          />
          <Card
            title="AtCoderBook"
            src="atcoder_book.jpg"
            alt="AtCoderBook Image"
            description="BookMark (deprecated)"
            link="https://chrome.google.com/webstore/detail/atcoderbook/lcojnofidkanlkoaagdbjkdnelbnlnng?hl=ja"
          />
          <Card
            title="HideTimeline"
            src="hide_twitter.jpg"
            alt="Hide Twitter Timeline"
            description="Hide Twitter TL"
            link="https://greasyfork.org/ja/scripts/428329-hide-twitter-timeline"
          />
        </div>
      </div>
    </div>
  )
}
export default Works
