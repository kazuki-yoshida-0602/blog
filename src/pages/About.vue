<template lang="pug">
.about
  header(:class="{ active: isNotLanding }").mobile-header
    a(href="/").mobile-header__title
      | ⬅︎   Back to Top
    div(@click="menuToggle", v-bind:class="{ active: menuFlag }").mobile-header__menu
      span
      span
      span
  transition(appear, name="contents")
    .top-image
      img(class="top-image__img", src="images/sheep.png")
      img(class="top-image__img", src="images/selfie.jpg")
  transition(appear, name="contents2")
    .description
      | 都内でWebエンジニアとして働いている26歳。<br />
      | 普段はバックエンドエンジニアだが、フロントエンドも組み込みも好きなので幅広く勉強中。<br />
      | 趣味は美味しいお酒とおつまみを用意して映画を流しながらコードを書くこと。<br />
  transition(appear, name="contents3")
    .section

      //- スキル
      .section__title
        | Skills
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
        | Social
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
        | Favorites
      .section__content
        span.section__content__index
          | Book
        span.section__content__value
          a(href="https://www.amazon.co.jp/dp/B00NQ3QONK/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1", target="_blank")
            | Zero to One<br />

        span.section__content__index
          | Music
        span.section__content__value
          a(href="https://www.youtube.com/watch?v=q0xK_QRuP8Y", target="_blank")
            | Bunt, 
          a(href="https://www.youtube.com/watch?v=m-M1AtrxztU", target="_blank")
            | Clean Bandit, 
          a(href="https://www.youtube.com/watch?v=AYD7TuXWVH8", target="_blank")
            | Steve Aoki
        span.section__content__index
          | Movie
        span.section__content__value
          a(href="https://www.youtube.com/watch?v=SGWvwjZ0eDc", target="_blank")
            | The Departed<br />

      //- 履歴
      .section__title
        | History
      .section__content
        span.section__content__index
          | 2000
        span.section__content__value
          | 将来は物理学者になりたいと考える<br />
        span.section__content__index
          | 2008
        span.section__content__value
          | 高校でプログラミングを始める<br />
        span.section__content__index
          | 2011
        span.section__content__value
        | 京都の大学に入学<br />
        span.section__content__index
          |
        span.section__content__value
        | サークル活動やアメリカ留学などを経験<br />
        span.section__content__index
          | 2017
        span.section__content__value
          | 経営コンサルタントとして経営再建PJ、
        span.section__content__index
          |
        span.section__content__value
          | 経営計画策定PJなどに携わる
        span.section__content__index
          | 2018
        span.section__content__value
          | IT企業へ入社しWebエンジニアに
        span.section__content__index
          |
        span.section__content__value
          | ← Now

</template>

<script>
export default {
  data () {
    return {
      menuFlag: false,
    }
  },

  methods: {
    menuToggle: function() {
      console.log("menuFlag")
      console.log(this.menuFlag)
      this.menuFlag = !this.menuFlag;
    }
  },
}
</script>


<style lang="scss" scoped>
@import '../mixins';

$padding-size: 20px;

.about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 12px;

  color: white;
  background-color: black;
  opacity: 0.85;

  box-sizing: border-box;
  overflow:auto;
  box-shadow: 0px 4px 8px rgba(0,0,0,0.3);

  position: fixed;
  right: 20px;

  @include sp {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0%;
    padding: 10%;

    font-size: 12px;
  }
  @include pc {
    width: 65%;
    height: 95%;
    padding: 5%;

    font-size: 18px;
  }
}

.top-image {
  @include sp {
    margin-left: 25%;
  }
  @include pc {
    margin-left: 35%;
  }
}

.top-image__img {
  border-radius: 50%;

  @include sp {
    width: 90px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
  @include pc {
    width: 140px;
    margin-top: 100px;
    margin-bottom: 100px;
  }
}

.description {
  margin-top: 3%;
  @include sp {
    line-height: 24px;
  }
  @include pc {
    line-height: 30px;
  }
}

.section {
  > .section__title {
    margin-top: 10%;
    margin-bottom: 1%;
    font-size: 24px;
  }
  > .section__content {
    margin-left: 5%;
    font-size: 12px;
    line-height: 20px;

    > span.section__content__index {
      font-weight: bold;
      display: inline-block;
      @include sp {
        width: 66px;
      }
      @include pc {
        width: 100px;
      }
    }
  }
}

a:visited, a {
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}


/*****  mobile用ヘッダ *****/
.mobile-header {
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  padding-top: 20px;
  padding-bottom: 10px;
  padding-left: 20px;
  background: black;

  @include pc {
    display: none;
  }

  > .mobile-header__title {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
}

/* humberger menu */
.mobile-header__menu, .mobile-header__menu span {
  display: inline-block;
  transition: all .4s;
  box-sizing: border-box;
}
.mobile-header__menu {
  position: fixed;
  right: 20px;
  width: 30px;
  height: 22px;
}
.mobile-header__menu span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #fff;
  border-radius: 4px;
}
.mobile-header__menu span:nth-of-type(1) {
  top: 0;
}
.mobile-header__menu span:nth-of-type(2) {
  top: 10px;
}
.mobile-header__menu span:nth-of-type(3) {
  bottom: 0;
}
.mobile-header__menu.active span:nth-of-type(1) {
  -webkit-transform: translateY(10px) rotate(-45deg);
  transform: translateY(10px) rotate(-45deg);
}
.mobile-header__menu.active span:nth-of-type(2) {
  opacity: 0;
}
.mobile-header__menu.active span:nth-of-type(3) {
  -webkit-transform: translateY(-10px) rotate(45deg);
  transform: translateY(-10px) rotate(45deg);
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
