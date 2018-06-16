import Vue from 'vue'
import Router from 'vue-router'

import * as firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Router)

const loadView = (view) => {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loadView('Login')
    },
    {
      path: '/home',
      name: 'home',
      component: loadView('Home'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      redirect: { name: 'home' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) {
    return next('login')
  }

  return next()
})

export default router
