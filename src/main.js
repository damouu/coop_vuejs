import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './../node_modules/bulma/css/bulma.css'

window.axios = axios.create({
  baseURL : 'https://api.coindesk.com',
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
