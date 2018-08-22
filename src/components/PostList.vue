<template lang="pug">
  div
    div(v-for="(post, index) in posts").link
      button(@click="selectPost(index)") {{ post.published }} &ensp; {{ post.title }}
</template>

<script>
  import axios from 'axios'

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

    }
  }
</script>

<style lang="scss">

button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  color: white;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;

  &:hover {
    text-decoration: underline;
  }
}

.link {
  display: block;
  text-decoration: none;
  margin-bottom: 10px;
  color: white;
  text-shadow: 0px 0px 1em black, 0px 0px 1em black;
}

</style>
