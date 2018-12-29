import Vue from 'vue'
import App from './App'

import Vuex from 'vuex'
import store from './store'

import iView from 'iview'
import 'iview/dist/styles/iview.css'

import VueI18n from 'vue-i18n'
import en from './i18n/en/lang'
import tw from './i18n/tw/lang'

import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Posts from '@/components/Posts'
import Users from '@/components/Users'
import Article from '@/components/Article'

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(iView)
Vue.use(VueRouter)
Vue.use(VueI18n)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/posts',
    component: Posts,
    caseSensitive: false
  },
  {
    path: '/users',
    component: Users
  },
  {
    path: '/article/:id',
    name: 'article',
    component: Article
  }
]
const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes
})

const locale = localStorage.getItem('locale') || 'tw'
const i18n = new VueI18n({
  locale,
  messages: { en, tw }
})

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
