<template lang="pug">
.about
  .top-image
    img(class="top-image__img", src="images/sheep.png")
  .description
    | 栃木県生まれ東京都在住の26才。<br />経営コンサルティングファームを経験してからWebエンジニアへ。<br />美味しいお酒がたまらなく好き。
  .section
    .section__title
      | ・Favorites
    .section__content
      p: | Book  Zero to One (Peter Thiel著)<br />
      p: | Music  Bunt, Clean Bandit, Ateve Aoki, .. <br />
      p: | Muvie  The Departed (監督: Martin Scorsese)<br />

    .section__title
      | ・Skills
    .section__content
      p: | Backend  Ruby, Ruby on Rails<br />
      p: | Frontend  Vue.js <br />
      p: | Others  English at conversational level, Microsoft Excel at Professional level<br />

    .section__title
      | ・History
    .section__content
      p: | 2008  東京学芸大学附属高校に入学<br />
      p: | 2011  京都大学に入学、サークル活動や留学など<br />
      p: | 2015  京都大学大学院へ進学<br />
      p: | 2017  経営共創基盤に入社し、経営コンサルタントに<br /> 
      p: | 2018  都内IT企業へ入社しエンジニアに  ← Now
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
}


</style>

