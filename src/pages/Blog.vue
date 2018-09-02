<template lang="pug">
.blog
  .sidebar
    div(v-for="(post, index) in posts")
      div(@click="selectPost(index)").sidebar__post
        .sidebar__post__title
          | {{ post.title }}<br />
        .sidebar__post__published
          | {{ post.published }}
  div(v-if="post").article
    .article__title
      | {{ post.title }}
    .article__published
      | {{ post.published }}
    div(v-html="post.body").article__body
</template>

<script>
import axios from 'axios'

export default {
  name: 'Blog',
  data () {
    return {
      posts: [],
      post: null,
      endpoint: 'https://api.buttercms.com/v2/posts/?page=1&page_size=10&auth_token=02c756e0182ce47b34d9b96ba3a11bd08e46a83b',
    }
  },

   created() {
    this.getAllPosts();
  },

  methods: {
    // Blog投稿一覧の取得
    getAllPosts() {
      axios.get(this.endpoint)
        .then(response => {
          this.posts = response.data.data;
        })
        .catch(error => {
          console.log('-------------error------------');
          console.log(error);
        })
    },

    selectPost: function(index) {
      this.post = this.posts[index];
    }

  }
}
</script>

<style lang="scss" scoped>
$padding-size: 20px;

.blog {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.2em;
}

.sidebar {
  box-sizing: border-box;
  overflow:auto;
  /* border: solid #808000; */
  width: 25%;
  height: 70%;
  padding-top: 2%;

  position: fixed;
  left: calc(20px + 5%);

  > div:hover {
    text-decoration: underline;
    text-decoration-color: white;
  }
}

.sidebar__post {
  background-color: rgba(0,0,0,0);
  width: 100%;
  margin-top: 4%;

  text-shadow: 0em 0em 10em black, 0em 0em 10em black;
  color: white;

  > .sidebar__post__title {
  font-size: 1.0em;
  text-align: left;
  }
  > .sidebar__post__published {
  font-size: 0.8em;
  text-align: right;
  }
}

.article {
  background-color: white;

  box-sizing: border-box;
  width: 61%;
  height: 91%;
  padding: 2%;

  position: fixed;
  right: calc(20px + 3%);

  > .article__title {
    font-size: 1.3em;
  }

  > .article__published {
    font-size: 1.0em;
    text-align: right;
  }

  > .article__body {
    margin-top: 3%;
    font-size: 1.0em;
  }
}

</style>
