<template>
    <div class="column is-4 is-offset-4">
        <div class="columns">
            <div class="column is-12">
                <img alt="Vue logo" src="https://i.ytimg.com/vi/uG3SqjVoFos/maxresdefault.jpg">
                <p class="subtitle is-4"> Label :<span
                        style="color:mediumseagreen"> {{this.$store.getters.conversation.label}}</span>
                </p>
                <p class="subtitle is-4"> Topic :<span
                        style="color:mediumseagreen"> {{this.$store.getters.conversation.topic}}</span>
                </p>
                <h4 class="title is-4">Edit conversation</h4>
                <input class="input is-primary input is-rounded"
                       type="text"
                       v-on:input="editConversationLabel"
                       placeholder="Edit conversation's label">
                <input class="is-warning input is-rounded"
                       type="text"
                       v-on:input="editConversationTopic"
                       placeholder="Edit conversation's topic">
                <button class="button is-success" v-on:click="editConversation"> edit</button>
            </div>
        </div>
        <h3 class="title is-3">All messages</h3>
        <div v-for="message in $store.getters.AllConvMessage">
            <div v-for="user in $store.getters.getMembres">
                <div v-if="user.id === message.member_id">
                    <router-link
                            :to="{ name: 'UserInfo', params: { user_id: user.id}}">
                        <img v-bind:src="'https://api.adorable.io/avatars/60/'+ user.id + '.png'"/>
                        {{user.fullname}}
                    </router-link>
                    {{message.created_at}} : {{message.message}}
                    <div class="control has-icons-left" v-show="message.member_id === $store.state.user_id">
                        <input class="input is-warning input is-rounded" type="text"
                               v-on:input="editMessageText"
                               v-on:keyup.enter="editMessage(message.id)" placeholder="Edit previous message">
                        <button class="button is-warning" v-on:click="editMessage(message.id)"> Edit
                            Message
                        </button>
                        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
                </span>
                        <button class="button is-danger is-outlined is-rounded"
                                v-on:click=deleteMessage(message.id)>
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <h4 class="title is-4">Write a Message</h4>
        <div class="control has-icons-left has-icons-right">
            <input class="input is-info input is-rounded" type="text"
                   v-on:input="setMessageText"
                   v-on:keyup.enter="setMessage" ref="Message" placeholder="Write a new message">
            <button class="button is-success " v-on:click="setMessage"> Submit</button>
            <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            setMessageText: function (event) {
                this.$store.commit('message', event.target.value)
            },
            editMessageText: function (event) {
                this.$store.commit('editMessageText', event.target.value)
            },
            editConversationLabel: function (event) {
                this.$store.commit('editConversationLabel', event.target.value)
            },
            editConversationTopic: function (event) {
                this.$store.commit('editConversationTopic', event.target.value)
            },
            editConversation() {
                axios
                    .put('channels/' + this.$route.params.id, {
                        label: this.$store.state.editConversationLabel,
                        topic: this.$store.state.editConversationTopic,
                        token: this.$store.getters.user_token
                    }).then(this.$router.push({name: 'Conversations'}));
            },
            getMessages() {
                axios
                    .get('channels/' + this.$route.params.id + "/posts?token=" + this.$store.getters.user_token, {})
                    .then(response => (this.$store.commit("AllConvMessage", response.data)))
            },
            setMessage() {
                axios
                    .post('channels/' + this.$route.params.id + "/posts?token=" + this.$store.getters.user_token, {
                        channel_id: this.$route.params.id,
                        member_id: this.$store.getters.user_id,
                        message: this.$store.getters.message,
                        token: this.$store.getters.user_token
                    })
                    .then(response => (this.$store.commit("conversations", response.data), this.getMessages()))
            },
            deleteMessage(id_message) {
                axios
                    .delete('channels/' + this.$route.params.id + "/posts/" + id_message + "?token=" + this.$store.getters.user_token, {})
                    .then(this.getMessages)
            },
            editMessage(message_id) {
                axios
                    .put('channels/' + this.$route.params.id + "/posts/" + message_id, {
                        message: this.$store.getters.editMessageText,
                        token: this.$store.getters.user_token
                    })
                    .then(this.getMessages)
            },
            getConversation() {
                axios
                    .get('channels/' + this.$route.params.id + "?token=" + this.$store.getters.user_token, {})
                    .then(response => (this.$store.commit("conversation", response.data)))
            },
            getMembres() {
                axios
                    .get('members?session_token=' + this.$store.getters.user_token, {})
                    .then(response => (this.$store.commit("getMembres", response.data)))
            },
        },
        mounted() {
            this.getConversation(),
                this.getMessages(),
                this.getMembres()
        }
    }
</script>

<style scoped>

</style>