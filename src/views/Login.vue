<template>
  <div>
    <h1>Login</h1>
    <img width="200px" src="@/assets/img/logo.png">
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email">
      <input v-model="password" type="password" placeholder="password" @keyup.enter="login">
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
  data () {
    return {
      email: '',
      password: ''
    }
  },
  created () {
    this.fetch_ready()
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
