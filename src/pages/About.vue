<template lang="pug">
.about
  transition(appear, name="contents")
    .top-image
      img(class="top-image__img", src="images/sheep.png")
      img(class="top-image__img", src="images/selfie.jpg")
  transition(appear, name="contents2")
    .description
      | 都内でWebエンジニアとして働き、バックエンド・フロントエンドの修行を積む26才。<br />
      | 作りたいものが色々とあるので時間を見つけて開発している。<br />
      | 趣味は美味しいお酒とおつまみを用意して映画を流しながらコードを書くこと。<br />
  transition(appear, name="contents3")
    .section

      //- スキル
      .section__title
        | ・Skills
      .section__content
        span.section__content__index
          | Backend
        span.section__content__value
          | Ruby, Ruby on Rails<br />
  
        span.section__content__index
          | Frontend
        span.section__content__value
          | Vue.js<br />
  
        span.section__content__index
          | Others
        span.section__content__value
          | Microsoft Excel<br />

      //- ソーシャル
      .section__title
        | ・Social
      .section__content
        span.section__content__index
          | GitHub
        span.section__content__value
          a(href="https://github.com/kazuki-yoshida-0602", target="_blank")
            | @kazuki-yoshida-0602<br />

        span.section__content__index
          | Twitter
        span.section__content__value
          a(href="https://twitter.com/__qooa__", target="_blank")
            | @__qooa__<br />

      //- 趣味
      .section__title
        | ・Favorites
      .section__content
        span.section__content__index
          | Book
        span.section__content__value
          a(href="https://www.amazon.co.jp/dp/B00NQ3QONK/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1", target="_blank")
            | Zero to One (Peter Thiel著)<br />

        span.section__content__index
          | Music
        span.section__content__value
          a(href="https://www.youtube.com/watch?v=q0xK_QRuP8Y", target="_blank")
            | Bunt, 
          a(href="https://www.youtube.com/watch?v=m-M1AtrxztU", target="_blank")
            | Clean Bandit, 
          a(href="https://www.youtube.com/watch?v=AYD7TuXWVH8", target="_blank")
            | Steve Aoki,
            |..<br />
        span.section__content__index
          | Movie
        span.section__content__value
          a(href="https://www.youtube.com/watch?v=SGWvwjZ0eDc", target="_blank")
            | The Departed (監督: Martin Scorsese)<br />

      //- 履歴
      .section__title
        | ・History
      .section__content
        span.section__content__index
          | 2000
        span.section__content__value
          | 物理学に興味を持ち勉強を始める<br />
        span.section__content__index
          | 2008
        span.section__content__value
          | 学芸大附高に入りプログラミングを始める<br />
        span.section__content__index
          | 2011
        span.section__content__value
          | 京都大学に入学、サークル活動や留学など気ままに過ごす<br />
        span.section__content__index
          | 2017
        span.section__content__value
          | 戦略コンサルとして経営再建PJ、経営計画策定PJなどに携わる<br />
        span.section__content__index
          | 2018
        span.section__content__value
          | 東京のIT企業へ入社しWebエンジニアに  ← Now<br />

</template>

<style lang="scss" scoped>
@import '../mixins';

$padding-size: 20px;

.about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  /* font-size: 1.2em; */
  font-size: 14px;

  background-color: white;
  /* opacity: 0.85; */

  box-sizing: border-box;
  overflow:auto;
  width: 61%;
  height: 91%;
  padding: 2%;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.3);

  position: fixed;
  right: calc(20px + 3%);

  @include sp {
  width: 94%;
  position: fixed;
  height: 91%;
  right: calc(12px);

  font-size: 12px;
  }

}

.top-image__img {
  border-radius: 50%;
  width: 12%;
}

.description {
  margin-top: 3%;
}

.section {
  > .section__title {
    margin-top: 3%;
    font-size: 1.2em;
    font-weight: bold;
  }
  > .section__content {
    margin-left: 5%;
    font-size: 1.0em;

    > span.section__content__index {
      font-weight: bold;
      display: inline-block;
      width: 62px;
    }
  }
}

a:visited, a {
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}


/*************************************/
/*            transition             */
/*************************************/
.contents-enter-active, .contents-leave-active {
    transition: opacity 1.5s;
}
.contents-enter, .contents-leave-to {
    opacity: 0;
}

.contents2-enter-active, .contents2-leave-active {
    transition: opacity 1.5s;
}
.contents2-enter, .contents2-leave-to {
    opacity: 0;
}

.contents3-enter-active, .contents3-leave-active {
    transition: opacity 1.5s;
}
.contents3-enter, .contents3-leave-to {
    opacity: 0;
}

</style>
