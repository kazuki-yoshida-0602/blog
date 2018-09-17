<template lang="pug">
#app
  .hero
    header.header
      transition(appear, name="title")
        .header__title
          router-link(class="link", to="/home")
            p.first
              | Kazuki
            p.last
              | Yoshida
      transition(appear, name="menu")
        p.header__description
          | @Tokyo, Japan. <br />
          | I work as a Backend web developer, and I'm learning Frontend and Embedded system.
      transition(appear, name="menu")
        nav.menu
          ul.menu
            router-link(class="menu__item", to="/home")
              span
                | home
            router-link(class="menu__item", to="/about")
              span
                | about
            router-link(class="menu__item", to="/blog")
              span
                | blog

    router-view(v-bind:post="post")

    footer.footer
      .footer__copyright
        | © 2018 KazukiYoshida
</template>

<style lang="scss">
@import 'mixins';

/*************************************/
/*              design               */
/*************************************/
$padding-size:      20px;
$hero-image:        "../images/2018/08/bari.jpg";

* {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;

  background-color: black;
  background-image: url($hero-image);
  background-size: cover;
  background-position: center;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.hero {
  padding: $padding-size;
}

header.header {
  /*  border: solid #808000; */

  width: 25%;
  position: fixed;
  bottom: 10%;
  left: 6.5%;

  @include sp {
  width: 88%;
  position: fixed;
  bottom: 20%;
  left: 6.5%;
  }

  /* text-shadow: 0em 0em 10em black, 0em 0em 10em black; */
  color: white;
  text-decoration: none;
}

a:visited, a {
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.header__title {
  /* font-size: 32px; */
  font-weight: bold;
  /* border: solid black; */

  @include pc {
    font-size: 80px;
    line-height: 82px;
    /* border: solid blue; */
  }

  @include tb {
    font-size: 80px;
    line-height: 82px;
    border: solid red;
  }

  @include sp {
    font-size: 60px;
    border: solid #808000;
  }
}

p.header__description {
  font-size: 16px;
  line-height: 24px;
}

.menu {
  /* border: solid 1px #808000; */
  font-size: 16px;
}

ul.menu {
  display:flex;
  justify-content: space-around;
}

span {
  margin-right: 0.5em;
}

footer.footer {
  /* border: solid #808000; */
  position: fixed;
  bottom: $padding-size;
  height: 2%;
  width: calc(100% - 40px);

  color: white;
  text-align: center;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;

  @include sp {
    font-size: 6px;
  }
}


/*************************************/
/*            transition             */
/*************************************/
.title-enter-active, .title-leave-active {
    transition: opacity 1s;
}
.title-enter, .title-leave-to {
    opacity: 0;
}

.desc-enter-active, .desc-leave-active {
    transition: opacity 3s;
}
.desc-enter, .desc-leave-to {
    opacity: 0;
}

.menu-enter-active, .menu-leave-active {
    transition: opacity 3s;
}
.menu-enter, .menu-leave-to {
    opacity: 0;
}

</style>
