import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './../node_modules/bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

window.axios = axios.create({
  baseURL : 'https://tools.sopress.net/iut/coop/api/',
  headers: {'Authorization': "57893d7fc2266cdc2fefa77c0ed6a31a3ce35c07"}
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
