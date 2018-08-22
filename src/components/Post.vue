<template lang="pug">
  div.article
   h2 {{ post.title }}
   div#post_info
     p#post_published {{ post.published }}
     div(v-for="tag in post.tags")#post_tags {{ tag.name }}
   span(v-html="post.body")
</template>

<script>
  export default {
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
