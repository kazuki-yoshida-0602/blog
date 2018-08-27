<template lang="pug">
.main
  .article
    .title
      | Kazuki Yoshida
    .description
      | 栃木県生まれ東京都在住の26才。専門は物理学。<br />経営コンサルティングファームを経験してからWebエンジニアへ。<br />趣味は美味しいお酒と陽気な音楽。
    .section
      .section-title
        | ・History
      .section-content
        p: | 2008  東京学芸大学附属高校に入学<br />
        p: | 2011  京都大学に入学、サークル活動や留学など<br />
        p: | 2015  京都大学大学院へ進学<br />
        p: | 2017  経営共創基盤に入社し、経営コンサルタントとして修行を積む<br /> 
        p: | 2018  都内のIT企業へバックエンドエンジニアとして入社<br /> 
        p: | 2018  ← Now<br /> 
      .section-title
        | ・Favorites
      .section-content
        p: | Book  Zero to One (Peter Thiel著)<br />
        p: | Music  Bunt, Clean Bandit, Ateve Aoki, .. <br />
        p: | Muvie  The Departed (監督: Martin Scorsese)<br />
      .section-title
        | ・Skills
      .section-content
        p: | Backend  Ruby, Ruby on Rails<br />
        p: | Frontend  Vue.js <br />
        p: | Others  English at conversational level, Microsoft Excel at Professional level<br />
</template>

<style lang="scss" scoped>
$font-color-dark:   #2c3e50;
$font-color-white:  white;
$background-color-dart: #363434;

.top-image {
  background-image: url('../../images/2018/08/snow_me.jpg');
  background-size: cover;
  background-position: center;
  height: 40vh;
}

.article {
  padding: 5%;
  background-color: white;
  opacity: 0.9;

  > .title {
    font-size: 5em;
    margin-bottom: 5%;
  }

  > .description {
    font-size: 1.3em;
    margin-bottom: 5%;
  }

  > .section > .section-title {
    font-size: 1.8em;
    margin-bottom: 1%;
  }

  > .section > .section-content {
    font-size: 1.3em;
    margin-bottom: 2%;
    margin-left: 5%;
    > p {
      margin-bottom: 1%;
    }
  }
}
</style>
