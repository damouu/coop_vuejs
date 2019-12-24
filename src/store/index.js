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
    user : false,
    email : '',
  },
  mutations: {
    email(state,email){
      state.email = email;
    },
    user(state,user){
      state.user = user;
    }
  },
  getters: {
    email  : state => state.email,
    user   : state => state.user,
  },
  actions: {
  },
  modules: {
  }
})
