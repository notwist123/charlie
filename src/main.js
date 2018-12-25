// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'

import Home from '@/components/Home'
import Posts from '@/components/Posts'
import Users from '@/components/Users'
import Article from '@/components/Article'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Posts',
    component: Posts
  },
  {
    path: '/Users',
    component: Users
  },
  {
    path: '/Article/:id',
    name: 'Article',
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
  store,
  components: { App },
  template: '<App/>'
})
