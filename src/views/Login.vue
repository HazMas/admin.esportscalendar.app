<template>
  <div>
    <h1>Login</h1>
    <img width="200px" src="@/assets/img/logo.png">
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email">
      <input type="password" v-model="password" @keyup.enter="login" placeholder="password">
      <input type="submit">
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import FetchMixin from '@/mixin/FetchMixin'

import { AUTH } from '@/store/types/actions'

export default {
  name: 'login',
  mixins: [
    FetchMixin
  ],
  created () {
    this.fetch_ready()
  },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', [AUTH]),
    login () {
      this.fetch_startLoading()
      this[AUTH]({email: this.email, password: this.password})
        .then(() => {
          this.fetch_ready()
          this.$router.push({name: 'home'})
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
