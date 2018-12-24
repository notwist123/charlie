// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import Home from '@/components/Home'
import Post from '@/components/Posts'
import Users from '@/components/Users'
import Article from '@/components/Article'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: '/', component: Home }
    ]
  },
  {
    path: '/Posts',
    component: Post,
    children: [
      { path: '/', component: Post }
    ]
  },
  {
    path: '/Users',
    component: Users,
    children: [
      { path: '/', component: Users }
    ]
  },
  {
    path: '/Article',
    component: Article
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})