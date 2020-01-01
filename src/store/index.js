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
    password: '',
    fullname : '',
    response : '',
  },
  mutations: {
    fullname(state,fullname){
      state.fullname = fullname;
    },
    email(state,email){
      state.email = email;
    },
    password(state,password){
      state.password = password;
    },
    response(state,response){
      state.response = response;
    }
  },
  getters: {
    fullname   : state => state.fullname,
    email      : state => state.email,
    password   : state => state.password,
    response   : state => state.response
  },
  actions: {
  },
  modules: {
  }
})
