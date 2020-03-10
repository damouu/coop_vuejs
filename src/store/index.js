import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from "vuex-persist";

const vp = new VuexPersistence({
    key: 'store',
    storage: window.localStorage
});

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [vp.plugin],
    state: {
        email: '',
        password: '',
        fullname: '',
        response: '',
        conversations: '',
        conversation_label: '',
        conversation_topic: '',
        user_token: '',
        user_id: '',
        message: '',
        conversation: '',
        AllConvMessage: '',
        etatSession: '',
        editMessageText: '',
        editConversationLabel: '',
        editConversationTopic: '',
        user_avatar: '',
        getMembres: '',
        user: false
    },
    mutations: {
        etatSession(state, etatSession) {
            state.etatSession = etatSession;
        },
        getMembres(state, getMembres) {
            state.getMembres = getMembres;
        },
        conversation_label(state, conversation_label) {
            state.conversation_label = conversation_label;
        },
        AllConvMessage(state, AllConvMessage) {
            state.AllConvMessage = AllConvMessage;
        },
        conversation_topic(state, conversation_topic) {
            state.conversation_topic = conversation_topic;
        },
        conversation(state, conversation) {
            state.conversation = conversation;
        },
        fullname(state, fullname) {
            state.fullname = fullname;
        },
        message(state, message) {
            state.message = message;
        },
        email(state, email) {
            state.email = email;
        },
        password(state, password) {
            state.password = password;
        },
        conversations(state, conversations) {
            state.conversations = conversations;
        },
        user_token(state, user_token) {
            state.user_token = user_token;
        },
        user_id(state, user_id) {
            state.user_id = user_id;
        },
        user_avatar(state, user_avatar) {
            state.user_avatar = user_avatar;
        },
        response(state, response) {
            state.response = response;
        },
        editMessageText(state, editMessageText) {
            state.editMessageText = editMessageText;
        },
        editConversationLabel(state, editConversationLabel) {
            state.editConversationLabel = editConversationLabel;
        },
        editConversationTopic(state, editConversationTopic) {
            state.editConversationTopic = editConversationTopic;
        },
        user(state, user) {
            state.user = user;
        }
    },
    getters: {
        conversation_label: state => state.conversation_label,
        conversation_topic: state => state.conversation_topic,
        conversation: state => state.conversation,
        fullname: state => state.fullname,
        email: state => state.email,
        password: state => state.password,
        response: state => state.response,
        user_token: state => state.user_token,
        user_id: state => state.user_id,
        user: state => state.user,
        message: state => state.message,
        AllConvMessage: state => state.AllConvMessage,
        conversations: state => state.conversations,
        editMessageText: state => state.editMessageText,
        user_avatar: state => state.user_avatar,
        getMembres: state => state.getMembres,
        etatSession: state => state.etatSession
    },
    actions: {},
    modules: {}
})
