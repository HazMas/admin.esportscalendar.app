import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const loadView = (view) => {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: loadView('Login')
    },
    {
      path: '/about',
      name: 'about',
      component: loadView('About')
    },
    {
      path: '/',
      redirect: { name: 'login' }
    }
  ]
})
