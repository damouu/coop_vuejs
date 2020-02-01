<template>
    <div class="column is-4 is-offset-4">
        <img alt="Vue logo" src="https://i.ytimg.com/vi/uG3SqjVoFos/maxresdefault.jpg">
        <p class="subtitle is-4"> topic : {{this.$route.params.topic}}</p>
        <button class="button is-link is-active" v-on:click="buttonsetMessage"> Post Message</button>
        <button class="button is-danger is-rounded" v-on:click="buttondeleteMessage"> deleteMessage</button>
        <div v-show="this.$store.state.user === true">
            <textarea class="textarea is-danger" v-on:input="setMessage" placeholder="Danger textarea"></textarea>
        </div>
        <div v-for="message in $store.getters.AllConvMessage">
            {{message.member_id}} {{message.created_at}} : {{message.message}}
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            buttongetConversation: function (event) {
                axios
                    .get('channels/' + this.$route.params.id + "/posts?token=" + this.$store.getters.user_token, {
                        channel_id: this.$route.params.id,
                        token: this.$store.getters.user_token
                    })
                    .then(response => (this.$store.commit("AllConvMessage", response.data))
                        .catch(error => console.log(error)))
            },
            buttonsetMessage: function (event) {
                axios
                    .post('channels/' + this.$route.params.id + "/posts?token=" + this.$store.getters.user_token, {
                        channel_id: this.$route.params.id,
                        member_id: this.$store.getters.user_id,
                        message: this.$store.getters.message,
                        token: this.$store.getters.user_token
                    })
                    .then(response => (this.$store.commit("conversations", response.data)),
                        this.buttongetConversation()
                            .catch(error => console.log(error)))
            },
            setMessage: function (event) {
                this.$store.commit('message', event.target.value)
            },
            buttondeleteMessage: function (event) {
                axios
                    .delete('channels/' + this.$route.params.id + "/posts/" + "7f7b597503d1a50deaa16cc0140e5e35ffc1d5f3" + "?token=" + this.$store.getters.user_token, {})
                    .catch(error => console.log(error))
            },
        },
        beforeMount() {
            this.buttongetConversation();
        }
    }
</script>

<style scoped>

</style>