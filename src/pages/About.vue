<template lang="pug">
.about
  .top-image
    img(class="top-image__img", src="images/sheep.png")
  .description
    | 栃木県生まれ東京都在住の26才。<br />経営コンサルティングファームを経験してからWebエンジニアへ。<br />美味しいお酒がたまらなく好き。
  .section

    //- 趣味
    .section__title
      | ・Favorites
    .section__content
      span.section__content__index
        | Book
      span.section__content__value
        | Zero to One (Peter Thiel著)<br />

      span.section__content__index
        | Music
      span.section__content__value
        | Bunt, Clean Bandit, Ateve Aoki, ..<br />

      span.section__content__index
        | Movie
      span.section__content__value
        | The Departed (監督: Martin Scorsese)<br />

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

    //- 履歴
    .section__title
      | ・History
    .section__content
      span.section__content__index
        | 2008
      span.section__content__value
        | 東京学芸大学附属高校に入学<br />
      span.section__content__index
        | 2011
      span.section__content__value
        | 京都大学に入学、サークル活動や留学など<br />
      span.section__content__index
        | 2015
      span.section__content__value
        | 京都大学大学院へ進学<br />
      span.section__content__index
        | 2017
      span.section__content__value
        | 経営共創基盤に入社し、経営コンサルタントに<br />
      span.section__content__index
        | 2018
      span.section__content__value
        | 都内IT企業へ入社しエンジニアに  ← Now<br />

</template>

<style lang="scss" scoped>
$padding-size: 20px;

.about {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.2em;

  background-color: white;
  opacity: 0.85;

  width: 55%;
  height: 82%;
  padding: 2%;

  position: fixed;
  right: $padding-size;
}

.top-image__img {
  border-radius: 50%;
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
  }

  > .section__content > span.section__content__index {
    font-weight: bold;
  }
}


</style>

