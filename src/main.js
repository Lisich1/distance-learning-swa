import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import firebase from 'firebase/app'
import router from './router'
import store from './store'
import 'firebase/auth'
import 'firebase/database'
import { firebaseConfig } from '../firebase.config'

Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)
let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})