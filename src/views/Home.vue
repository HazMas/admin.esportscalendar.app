<template>
  <div>
    😁
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import { LOGOUT } from '@/store/types/actions'

export default {
  name: 'home',
  methods: {
    ...mapActions('user', [LOGOUT]),
    logout () {
      this[LOGOUT]()
        .then(() => this.$router.push({name: 'login'}))
    }
  }
}
</script>
