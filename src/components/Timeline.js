import React from "react"

function Item(props) {
  return (
    <li class="mb-6">
      <div class="flex items-center mb-1">
        <div class="bg-gray-800 rounded-full h-8 w-8"></div>
        <div class="flex-1 ml-12">
          ({props.date}) &nbsp;&nbsp; {props.title}
        </div>
      </div>
      <div class="ml-20">{props.text}</div>
    </li>
  )
}

function Timeline() {
  return (
    <div
      className="container mx-auto text-gray-700 font-bold mt-12 md:mt-8"
      id="character"
    >
      <section>
        <div className="container mx-auto flex flex-col items-center w-11/12">
          <div class="relative w-9/12">
            <div
              class="border-r-2 border-gray-800 absolute h-full"
              style={{ left: "15px" }}
            ></div>
            <ul class="list-none m-0 p-0">
              <Item date="1997" title="生まれる" />
              <Item date="2013" title="秋田高校へ" />
              <Item
                date="2016"
                title="秋田大学へ"
                text="ゲームプログラミングサークルでゲームを作り始める"
              />
              <Item
                date="2018/05 ~ 2018/08"
                title="地元の Web 会社でアルバイトをする"
              />
              <Item
                date="2018/05 ~ 2020/07"
                title="株式会社 444 で開発や競プロ問題を作り始める"
              />
              <Item
                date="2018/10"
                title="ICPC Asia Yokohama Regional 2018"
                text="運が良い..."
              />
              <Item
                date="2019/09"
                title="第一回日本最強プログラマー学生選手権決勝"
              />
              <Item
                date="2019/12"
                title="第二回全国統一プログラミング王決定戦本戦"
              />
              <Item date="2020/04" title="筑波大学へ" />
              <Item date="2020/08" title="freee Summer Internship 2020" />
              <Item
                date="2020/09 ~ 2020/12"
                title="いい生活 Long-term Internship 2020"
              />
              <Item
                date="2020/09"
                title="TopCoder Eastern Asia Regionals 2020"
              />
              <Item
                date="2020/10"
                title="VOYAGE GROUP Sunrise Internship 2020"
              />
              <Item
                date="2021/03"
                title="ICPC Asia Yokohama Regional 2020"
                text="ただただ運が良い..."
              />
              <Item
                date="2021/03"
                title="Discovery Channel Code Contest 本戦 2021"
              />
              <Item
                date="2021/04 ~ "
                title="内定先アルバイトインターン"
                text="Now Hidden!"
              />
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Timeline
