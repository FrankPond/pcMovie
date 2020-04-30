import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/Home'
import MovieList from '@/view/MovieList'
import User from '@/view/User'

Vue.use(Router)

// todo: 路由按需加载

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movieList',
      name: 'movieList',
      component: MovieList
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
