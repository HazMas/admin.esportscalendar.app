<template>
  <div>
    <h1>
      {{$t('login')}}
    </h1>
    <img width="200px" src="@/assets/img/logo.png">
    <form @submit.prevent="login">
      <input v-model="email" :placeholder="$t('email')" type="email">
      <input v-model="password" :placeholder="$t('password')" type="password" @keyup.enter="login">
      <input :value="$t('login')" type="submit">
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
