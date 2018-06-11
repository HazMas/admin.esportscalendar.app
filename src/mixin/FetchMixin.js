export default {
  data () {
    return {
      'fetch_loading': false
    }
  },
  methods: {
    fetch_startLoading () {
      this.fetch_loading = true
    },
    fetch_ready () {
      this.fetch_loading = false
      this.$emit('ready')
    }
  }
}
