import Vue from 'vue'
import firebase from 'firebase'

import App from './App.vue'

import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBmWYhxl0-M-4MGR9zOH2JgTRMYo_7H-iY',
  authDomain: 'e-sports-info.firebaseapp.com',
  databaseURL: 'https://e-sports-info.firebaseio.com',
  projectId: 'e-sports-info',
  storageBucket: 'e-sports-info.appspot.com',
  messagingSenderId: '420545083704'
}
firebase.initializeApp(config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
