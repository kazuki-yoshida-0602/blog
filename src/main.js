import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import App from './App.vue'
import About from './components/About.vue'
import SideAbout from './components/SideAbout.vue'
import Post from './components/Post.vue'
import PostList from './components/PostList.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
    },
    {
      path: '/about',
      name: 'about',
      components: {
        side: SideAbout,
        main: About,
      },
    },
    {
      path: '/blog',
      name: 'blog',
      components: {
        side: PostList,
        main: Post,
      },
    },
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
