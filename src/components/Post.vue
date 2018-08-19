<template>
  <div class="article">
   <h2>
     {{ post.title }}
   </h2>
   <div id="post_info">
     <p id="post_published">{{ post.published }}</p>
     <div id="post_tags" v-for="tag in post.tags">
       {{ tag.name }}
     </div>
   </div>
   <span v-html="post.body"></span>
  </div>
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
