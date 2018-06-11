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

import { AUTH } from '@/store/types/actions'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('user', [AUTH]),
    login () {
      this[AUTH]({email: this.email, password: this.password})
        .then(() => {
          this.$router.push({name: 'home'})
        })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
