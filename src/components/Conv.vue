<template>
    <div class="column is-4 is-offset-4">
        <img alt="Vue logo" src="https://i.ytimg.com/vi/uG3SqjVoFos/maxresdefault.jpg">
        <button class="button is-success" v-on:click="buttongetConversation"> Get Message</button>
        <button class="button is-link is-active" v-on:click="buttonsetMessage"> Set Message</button>
        <button class="button is-danger is-rounded" v-on:click="buttondeleteMessage"> deleteMessage</button>
        <input class="input is-info" v-on:input="setMessage" type="text" placeholder="write a message">
        <H1>conversation {{this.$route.params.id}} </H1>
        <div v-for="message in $store.getters.AllConvMessage">
            message : {{message.message}} {{message.member_id}}
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
                    .then(response => (this.$store.commit("conversations", response.data))
                        .catch(error => console.log(error)))
            },
            setMessage: function (event) {
                this.$store.commit('message', event.target.value)
            },
            buttondeleteMessage: function (event) {
                axios
                    .delete('channels/' + "80e6a186176414536570e15745ecc4182cdd2568" + "?posts=" + "7ad1b65af08a8f8d40e01d1adc4023ad2e154a1c" + "&token=" + this.$store.getters.user_token, {
                        channel_id: "80e6a186176414536570e15745ecc4182cdd2568",
                        id : "7ad1b65af08a8f8d40e01d1adc4023ad2e154a1c",
                        token : this.$store.getters.user_token
                    })
                    .catch(error => console.log(error))
            },
        }
    }
</script>

<style scoped>

</style>