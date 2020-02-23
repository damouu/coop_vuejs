<template>
    <div class="hello">
        <img v-bind:src="'https://api.adorable.io/avatars/100/'+ $route.params.user_fullname"/>
        <div v-for="user in $store.getters.response">
            <div v-if="user.id == $route.params.id">
                <div class="column is-half is-offset-one-quarter">
                    User : <span
                        style="color:mediumseagreen">{{user.fullname}} </span>
                </div>
                <div class="column is-half is-offset-one-quarter">
                    Email : <span
                        style="color:mediumseagreen">{{user.email}} </span>
                </div>
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
            async buttongetMessages(channel_id) {
                try {
                    await
                        axios
                            .get('channels/' + channel_id + "/posts?token=" + this.$store.getters.user_token, {})
                            .then(response => (this.$store.commit("AllConvMessage", response.data)))
                } catch (error) {
                    console.log(error)
                }
            },
            beforeMount() {
                this.buttonViewUsers();
                this.buttonAllConversation();
            }
        }
    }
</script>
<style scoped>
</style>
