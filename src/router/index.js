import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home/Home');
const PlayList = () => import('../views/PlayList/PlayList');
const AppLink = () => import('../views/AppLink/AppLink');
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
