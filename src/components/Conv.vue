<template>
    <div class="column is-4 is-offset-4">
        <img alt="Vue logo" src="https://i.ytimg.com/vi/uG3SqjVoFos/maxresdefault.jpg">
        <p class="subtitle is-4"> Label :<span style="color:mediumseagreen"> {{this.$route.params.label}}</span></p>
        <p class="subtitle is-4"> Topic :<span style="color:mediumseagreen"> {{this.$route.params.topic}}</span></p>
        <div v-for="user in $store.getters.response">
            <div v-for="message in $store.getters.AllConvMessage">
                <div v-if="user.id === message.member_id">
                    {{user.fullname}} {{message.created_at}} : {{message.message}}
                    <div class="control has-icons-left" v-show="message.member_id === $store.state.user_id">
                        <input class="input is-warning input is-rounded" v-model="Message" type="text"
                               v-on:input="editMessage"
                               v-on:keyup.enter="buttoneditMessage(message.id)" placeholder="Edit previous message">
                        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
                </span>
                        <button class="button is-danger is-outlined is-rounded"
                                v-on:click=buttondeleteMessage(message.id)>
                            <span>Delete</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="this.$store.state.user === true">
            <label class="label">Write a message</label>
            <div class="control has-icons-left has-icons-right">
                <input class="input is-info input is-rounded" v-model="Message" type="text" v-on:input="setMessage"
                       v-on:keyup.enter="buttonsetMessage" ref="Message" placeholder="Write a new message">
                <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            setMessage: function (event) {
                this.$store.commit('message', event.target.value)
            },
            editMessage: function (event) {
                this.$store.commit('editMessage', event.target.value)
            },
            async buttongetConversation() {
                try {
                    await
                        axios
                            .get('channels/' + this.$route.params.id + "/posts?token=" + this.$store.getters.user_token, {
                                channel_id: this.$route.params.id,
                                token: this.$store.getters.user_token
                            })
                            .then(response => (this.$store.commit("AllConvMessage", response.data)))
                } catch (error) {
                    console.log(error)
                }
            },
            async buttonsetMessage() {
                try {
                    await
                        axios
                            .post('channels/' + this.$route.params.id + "/posts?token=" + this.$store.getters.user_token, {
                                channel_id: this.$route.params.id,
                                member_id: this.$store.getters.user_id,
                                message: this.$store.getters.message,
                                token: this.$store.getters.user_token
                            })
                            .then(response => (this.$store.commit("conversations", response.data)),
                                this.buttongetConversation()),
                        this.$refs.Message.value = null;
                } catch (error) {
                    console.log(error)
                }
            },
            async buttondeleteMessage(id_message) {
                try {
                    await
                        axios
                            .delete('channels/' + this.$route.params.id + "/posts/" + id_message + "?token=" + this.$store.getters.user_token, {})
                    this.buttongetConversation()
                } catch (error) {
                    console.log(error)
                }
            },
            async buttoneditMessage(message_id) {
                try {
                    await
                        axios
                            .post('channels/' + this.$route.params.id + "/posts?id=" + message_id + "&token=" + this.$store.getters.user_token, {
                                message: this.$store.getters.editMessage,
                            })
                    this.buttondeleteMessage(message_id);
                    this.buttongetConversation()
                } catch (error) {
                    console.log(error)
                }
            },
        },
        beforeMount() {
            this.buttongetConversation();
        }
    }
</script>

<style scoped>

</style>