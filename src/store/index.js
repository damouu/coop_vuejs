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
    user  : false,
    email : '',
    dede: false
  },
  mutations: {
    email(state,email){
      state.email = email;
    },
    user(state,user){
      state.user = user;
    },
    dede(state,dede){
      state.dede = dede;
    }
  },
  getters: {
    email  : state => state.email,
    user   : state => state.user,
    dede   : state => state.dede,
  },
  actions: {
  },
  modules: {
  }
})
