<template>
  <div id="nav">
    <img width="15px" src="@/assets/img/logo.png">
    <router-link :to="{name: 'home'}">
      {{$t('home')}}
    </router-link>
    <template v-if="isUserLogged"> |
      <a href="#" @click.prevent="logout">
        {{$t('logout')}}
      </a>
    </template>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { LOGOUT } from '@/store/types/actions'

export default {
  name: 'the-header',
  computed: {
    ...mapGetters('user', ['isUserLogged'])
  },
  methods: {
    ...mapActions('user', [LOGOUT]),
    logout () {
      this[LOGOUT]()
        .then(() => this.$router.push({name: 'login'}))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
