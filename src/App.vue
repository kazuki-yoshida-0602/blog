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
          ul.menu-container
            .menu-button
              router-link(class="menu-button__link" to="/about")
                span
                  | about
            .menu-button
              router-link(class="menu-button__link" to="/blog")
                span
                  | blog
    router-view(v-bind:post="post")

    footer.footer
      .footer__copyright
        | © 2018 KazukiYoshida
</template>

<script>
export default {
  data () {
    return {
      menuFlag: false,
      isNotLanding: true,
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

<style lang="scss">
@import 'mixins';
$padding-size: 20px;
$hero-image: "../images/2018/08/bari.jpg";

* {
  margin: 0;
  padding: 0;
}

html {
  -webkit-overflow-scrolling: touch;
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

.header {
  width: 25%;
  position: fixed;
  bottom: 10%;
  left: 6.5%;

  color: white;
  text-decoration: none;

  @include sp {
  width: 88%;
  position: fixed;
  top: 3%;
  left: 6.5%;
  }

  > .header__title {
    font-weight: bold;

    @include sp {
      font-size: 64px;
      line-height: 64px;
    }
    @include pc {
      font-size: 80px;
      line-height: 82px;
    }
  }

  > .header__description {
    @include sp {
      display: none;
    }

    font-size: 16px;
    line-height: 24px;
  }
}

.menu {
  position: fixed;
  @include sp {
    bottom: 10%;
    width: 90%;
  }
  @include pc {
    bottom: 4%;
    width: 23%;
  }

  > .menu-container {
    display:flex;
    justify-content: space-around;

    @include sp {
      font-size: 14px;
    }
    @include pc {
      font-size: 16px;
    }
  }
}

.menu-button__link {
  display: block;
  width: 110px;
  padding: 0.8em;
  text-align: center;
  text-decoration: none;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  transition: .4s;

  &:hover {
    background: white;
    color: #000;
  }
}

footer.footer {
  position: fixed;
  bottom: $padding-size;
  height: 1%;
  width: calc(100% - 40px);
  color: white;
  text-align: center;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;
  @include sp {
    font-size: 4px;
  }
}

a:visited, a {
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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
