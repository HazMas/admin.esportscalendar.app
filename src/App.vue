<template>
  <div id="app">
    <Header/>
    <router-view @ready="pageReady"/>
  </div>
</template>

<script>
import '../node_modules/nprogress/nprogress.css'
import NProgress from 'nprogress'

import Header from '@/components/TheHeader'

export default {
  name: 'app',
  components: {
    Header
  },
  created () {
    NProgress.configure({
      speed: 200,
      showSpinner: false
    })
    NProgress.start()
    this.$router.beforeEach((to, from, next) => {
      NProgress.start()
      next()
    })
  },
  methods: {
    pageReady () {
      NProgress.done()
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
