<template lang="pug">
#app
  .hero
    header.header
      .title
        router-link(class="link", :to="{ name: 'home' }")
        | {{ C.TITLE }}
      p.description
        | {{ C.DESCRIPTION }}

    main.main
      router-view(name="main", v-bind:post="post")

    nav.menu
      ul
        li(v-for="item in C.MENU")
          router-link(class="link", :to="{ name: item.linkto }")
            | {{ item.title }}

    .sidebar
      router-view(name="side", v-on:select_post="selectPost")

    footer.footer
      small
        | {{ C.COPY_RIGHT }}
</template>

<script>
import axios from 'axios'

const TITLE               = "Kazuki's WebPage";
const DESCRIPTION         = "Web developer in Tokyo, Japan.";
const COPY_RIGHT          = "© 2018 KazukiYoshida.";
const BUTTER_CMS_ENDPOINT = "https://api.buttercms.com/v2/posts/?page=1&page_size=10&auth_token=02c756e0182ce47b34d9b96ba3a11bd08e46a83b"
const MENU = [
  {
    title: "home",
    linkto: "home",
  },
  {
    title: "about",
    linkto: "about",
  },
  {
    title: "blog",
    linkto: "blog",
  },
]

export default {
  name: 'app',
  data () {
    this.C = {
      TITLE,
      DESCRIPTION,
      COPY_RIGHT,
      MENU,
      BUTTER_CMS_ENDPOINT,
    };

    return {
      posts: [],
      post: null,
    };
  },

  created() {
    this.getAllPosts();
  },

  methods: {
    getAllPosts() {
      axios.get(this.C.BUTTER_CMS_ENDPOINT)
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.log('-------------error------------');
          console.log(error);
        })
    },

    selectPost(post) {
      this.post = post;
    }
  }
}
</script>

<style lang="scss">
$padding-size:      20px;
$sidebar-width:     35%;
$main-width:        62%;
$font-color-dark:   #2c3e50;
$font-color-white:  white;
$hero-image:        "../images/2018/08/bari.jpg";
$title-font-size:   4.5em;
$text-font-size:    1.3em;
$header-height:     35vh;
$menu-height:       24vh;
$sidebar-height:    55vh;

/* TODO: リセットcss追加 */

body {
  margin: 0;
  padding: 0;
  background-color: black;
  background-image: url($hero-image);
  background-size: cover;
  background-position: center;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $font-color-dark;
  width: 100vw;
  height: 100vh;
}

.hero {
  margin: 0;
  padding: $padding-size;
  width:  calc(100vw - $padding-size * 2);
  height: calc(100vh - $padding-size * 2);
}

header.header {
  position: absolute;
  bottom: $padding-size;
  left: $padding-size;
  box-sizing: border-box;
  height: $header-height;
  width: $sidebar-width;
  text-align: left;
  padding-left: 5%;
  color: $font-color-white;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;

  > .title {
    font-size: $title-font-size;
    font-weight: bold;
  }

  > p.description {
    font-size: $text-font-size;
  }
}

nav.menu {
  position: absolute;
  bottom: $padding-size;
  left: $padding-size;
  box-sizing: border-box;
  height: $menu-height;
  width: $sidebar-width;
  text-align: left;
  padding-left: 2.5%;
  color: white;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;

  > ul > li {
    display: inline-block;
    width: 10%;
  }

  > a:visited, a {
    color: white;
    font-size: 1.3em;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}

.sidebar {
  box-sizing: border-box;
  position: absolute;
  top:   $padding-size;
  left:  $padding-size;
  height: $sidebar-height;
  width: $sidebar-width;
  padding: 3%;
  text-align: left;
  padding-left: 5%;
}

main.main {
  position: absolute;
  top:   $padding-size;
  right: $padding-size;
  height: 93vh;
  width: $main-width;
}

footer.footer {
  width: calc(100% - 40px);
  text-align: center;
  position: fixed;
  bottom: $padding-size;
  color: white;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;
}

</style>
