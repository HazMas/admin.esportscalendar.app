import Vue from 'vue'
import Router from 'vue-router'

import store from '@/store/index'

Vue.use(Router)

const loadView = (view) => {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const isLoggedIn = () => {
  return store.getters[`user/isUserLogged`]
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loadView('Login'),
      beforeEnter: (to, from, next) => {
        if (isLoggedIn()) {
          return next({name: 'home'})
        }

        return next()
      }
    },
    {
      path: '/home',
      name: 'home',
      component: loadView('Home'),
      beforeEnter: (to, from, next) => {
        if (!isLoggedIn()) {
          return next({name: 'login'})
        }

        return next()
      }
    },
    {
      path: '/',
      redirect: { name: 'home' }
    }
  ]
})
