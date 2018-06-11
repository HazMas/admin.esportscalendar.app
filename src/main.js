import Vue from 'vue'
import * as firebase from 'firebase/app'

import App from './App.vue'

import router from './router'
import store from './store/index'
import './registerServiceWorker'
import i18n from './i18n'

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
  i18n,
  render: h => h(App)
}).$mount('#app')
