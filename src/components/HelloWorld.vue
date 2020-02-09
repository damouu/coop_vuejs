<template>
    <div class="hello">
        <img v-bind:src="'https://api.adorable.io/avatars/100/'+ $route.params.user_fullname"/>
        <div v-for="user in $store.getters.response">
            <div v-if="user.id == $route.params.id">
                User : {{user.fullname}}
                Email : {{user.email}}
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        methods: {
            editConversationTopic: function (event) {
                this.$store.commit('editConversationTopic', event.target.value)
            },
            async buttonViewUsers() {
                try {
                    await
                        axios
                            .get('members?session_token=' + this.$store.getters.user_token, {})
                            .then(response => (this.$store.commit("response", response.data)))
                } catch (error) {
                    console.log(error)
                }
            },
            async buttonAllConversation() {
                try {
                    await
                        axios
                            .get('channels?session_token=' + this.$store.getters.user_token, {})
                            .then(response => (this.$store.commit("conversations", response.data)))
                } catch (error) {
                    console.log(error)
                }
            },
            async buttongetMessages() {
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
            beforeMount() {
                this.buttonViewUsers();
                this.buttonAllConversation();
                this.buttongetMessages();
            }
        }
    }
</script>
<style scoped>
</style>
