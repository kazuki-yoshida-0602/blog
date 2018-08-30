<template lang="pug">
div
  div(v-for="(post, index) in posts").link
    button(@click="selectPost(index)") {{ post.published }} &ensp; {{ post.title }}

  .article
    h2 {{ post.title }}
    #post_info
      p#post_published {{ post.published }}
      div(v-for="tag in post.tags")#post_tags {{ tag.name }}
    span(v-html="post.body")
</template>

<script>
  export default {
    data () {
      return {
        posts: null,
        endpoint: 'https://api.buttercms.com/v2/posts/?page=1&page_size=10&auth_token=02c756e0182ce47b34d9b96ba3a11bd08e46a83b',
      }
    },

    created() {
      this.getAllPosts();
    },

    methods: {
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
        this.$emit('select_post', this.posts[index]);
      }
    },

    props: ['post'],
  }
</script>

<style scoped>
.article {
  padding: 5%;
  background-color: #EFEFEF;
}

#post_info {
  text-align: right;
}
</style>
