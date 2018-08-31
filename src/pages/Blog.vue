<template lang="pug">
.blog
  .sidebar
    | sidebar
  .article
    | article
</template>

<style lang="scss" scoped>
$padding-size: 20px;

.blog {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.2em;
}

.sidebar {
  box-sizing: border-box;
  border: solid #808000;
  width: 25%;
  height: 70%;
  padding-top: 2%;

  position: fixed;
  left: calc(20px + 5%);

  text-shadow: 0em 0em 10em black, 0em 0em 10em black;
  color: white;
  text-decoration: none;
  font-size: 1.0em;
}

.article {
  background-color: white;
  opacity: 0.85;

  box-sizing: border-box;
  width: 61%;
  height: 91%;
  padding: 2%;

  position: fixed;
  right: calc(20px + 3%);
}

</style>
