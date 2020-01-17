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
    conversation_label : '',
    conversation_topic : '',
    user_token : '',
    user_id : '',
    user : false
  },
  mutations: {
    conversation_label(state,conversation_label){
      state.conversation_label = conversation_label;
    },
    conversation_topic(state,conversation_topic){
      state.conversation_topic = conversation_topic;
    },
    fullname(state,fullname){
      state.fullname = fullname;
    },
    email(state,email){
      state.email = email;
    },
    password(state,password){
      state.password = password;
    },
    user_token(state,user_token){
      state.user_token = user_token;
    },
    user_id(state,user_id){
      state.user_id = user_id;
    },
    response(state,response){
      state.response = response;
    },
    user(state,user){
      state.user = user;
    }
  },
  getters: {
    conversation_label : state => state.conversation_label,
    conversation_topic : state => state.conversation_topic,
    fullname   : state => state.fullname,
    email      : state => state.email,
    password   : state => state.password,
    response   : state => state.response,
    user_token : state => state.user_token,
    user_id    : state => state.user_id,
    user       : state => state.user
  },
  actions: {
  },
  modules: {
  }
})
