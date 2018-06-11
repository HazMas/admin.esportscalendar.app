<template>
  <div>
    😁
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import FetchMixin from '@/mixin/FetchMixin'

import { LOGOUT } from '@/store/types/actions'

export default {
  name: 'home',
  mixins: [
    FetchMixin
  ],
  created () {
    this.fetch_ready()
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
