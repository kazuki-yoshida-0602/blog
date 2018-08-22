<template lang="pug">
  div#app
    div.hero
      div.sidebar
        div.side-top
          div.sidemenu
            router-view(name="side" v-on:select_post="selectPost")
        div.side-down
          div.content
           h1
             router-link(class="link" :to="{ name: 'home' }")
               != 'Kazuki\'s WebPage'
           p.desc
             Web developer in Tokyo, Japan.
           nav#pages
             ul
               li
                 router-link(class="link" :to="{ name: 'home' }") home
               li
                 router-link(class="link" :to="{ name: 'about' }") about
               li
                 router-link(class="link" :to="{ name: 'blog' }") blog
           small
             != '© 2018 KazukiYoshida.'
      div.main
        div.article
          router-view(name="main" v-bind:post="post")
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

/* TODO: リセットcss追加 */

* {
  font-family: 'Fira Sans';
  text-rendering: optimizeLegibility;
  font-feature-settings: "palt" 1;
}

body {
  margin: 0;
  padding: 0;
  background-color: black;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.hero {
  width: 100vw;
  height: 100vh;
  background-image: url('../images/2018/08/dawn.jpg');
  background-size: cover;
  background-position: center;
  animation: 1s fadeIn ease-in .5s 1 forwards;
}


/****** SIDEBAR *******/
.sidebar {
  float: left;
  height: 100%;
  width: 35%;
}

.side-top {
  width: 100%;
  height: 60%;
}

.side-top .sidemenu {
  padding: 10% 0% 0% 20%;
}

.side-down {
  width: 100%;
}

.content {
  padding: 10% 0% 0% 20%;
  text-align: left;
  color: white;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;

  > a:visited, a {
    color: white;
    font-size: 1.3em;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  > h1 {
    font-size: 2.5em;
    font-weight: bold;
  }

  > p {
    font-size: 1.3em;
  }
}

nav#pages > ul {
  padding-left: 0;

  > li {
    display: inline-block;
  }
}

/****** ARTICLE *******/
.main {
  float: right;
  height: 100%;
  width: 64.8%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.main .article {
  padding: 5% 5% ;
}

@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

</style>
