import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home/Home.vue');
const PlayList = () => import('../views/PlayList/PlayList.vue');
const AppLink = () => import('../views/AppLink/AppLink.vue');
const Player = () => import('../views/Player/Player.vue');
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: Home
  }, {
    path: '/playlist',
    component: PlayList
  }, {
    path: '/applink',
    component: AppLink
  }, {
    path: '/player',
    component: Player
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
