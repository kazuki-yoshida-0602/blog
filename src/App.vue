<template lang="pug">
#app
  .hero
    header.header
      .header__title
        router-link(class="link", to="/home")
          | Kazuki Yoshida
      p.header__description
        | @Tokyo, Japan. <br />
        | Backend web developer, Master of Physics.
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

  text-shadow: 0em 0em 10em black, 0em 0em 10em black;
  color: white;
  text-decoration: none;

  > a:visited, a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  > .header__title {
    font-size: 2.7em;
    font-weight: bold;
  }

  > p.header__description {
    font-size: 1.2em;
  }

  > .menu {
    font-size: 1.2em;
  }
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
}

</style>
