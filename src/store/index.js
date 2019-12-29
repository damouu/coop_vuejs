import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";

const vp = new VuexPersistence({
  key : 'store',
  storage:window.localStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
  plugins : [vp.plugin],
  state: {
    email : '',
    password: ''
  },
  mutations: {
    email(state,email){
      state.email = email;
    },
    password(state,password){
      state.password = password;
    }
  },
  getters: {
    email      : state => state.email,
    password   : state => state.password,
  },
  actions: {
  },
  modules: {
  }
})
