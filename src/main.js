import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import App from './App'

import About from './pages/About'
import Blog from './pages/Blog'

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
      component: About,
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog,
    },
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
