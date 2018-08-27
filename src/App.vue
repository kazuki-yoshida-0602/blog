<template lang="pug">
-
  var title        = "Kazuki's WebPage";
  var description  = "Web developer in Tokyo, Japan.";
  var copy_right   = "© 2018 KazukiYoshida.";

#app
  .hero
    header.header
      .title
        router-link(class="link", :to="{ name: 'home' }")
        | #{title}
      p.description
         | #{description}

    main.main
      router-view(name="main", v-bind:post="post")

    nav.menu
      ul
        li: router-link(class="link", :to="{ name: 'home' }") home
        li: router-link(class="link", :to="{ name: 'about' }") about
        li: router-link(class="link", :to="{ name: 'blog' }") blog

    .sidebar
      router-view(name="side", v-on:select_post="selectPost")

    footer.footer
      small
        | #{copy_right}
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  data () {
    return {
      posts: [],
      post: null,
      endpoint: 'https://api.buttercms.com/v2/posts/?page=1&page_size=10&auth_token=02c756e0182ce47b34d9b96ba3a11bd08e46a83b',
      msg: 'Welcome to Your Vue.js App',
    }
  },

  created() {
    this.getAllPosts();
  },

  methods: {
    getAllPosts() {
      axios.get(this.endpoint)
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
$padding-size:  20px;
$sidebar-width: 35%;
$main-width:    62%;
$font-color:    #2c3e50;
$hero-image:    "../images/2018/08/dawn.jpg";

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
  color: $font-color;
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
  height: 35vh;
  width: $sidebar-width;
  text-align: left;
  padding-left: 5%;
  color: white;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;

  > .title {
    font-size: 4.5em;
    font-weight: bold;
  }

  > p.description {
    font-size: 1.3em;
  }
}

nav.menu {
  position: absolute;
  bottom: $padding-size;
  left: $padding-size;
  box-sizing: border-box;
  height: 24vh;
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
  height: 55vh;
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
