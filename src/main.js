import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './../node_modules/bulma/css/bulma.css'

window.axios = axios.create({
  baseURL : 'https://tools.sopress.net/iut/coop/api/',
  headers : {
    'Authorization': '1610cf574d13278739c96b8972e746ffa94aaa56'
  }});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
