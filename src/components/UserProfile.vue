<template>
    <div class="hello">
        <img v-bind:src="'https://api.adorable.io/avatars/100/'+ $route.params.user_fullname"/>
        <div v-for="user in $store.getters.response">
            <div v-if="user.id == $route.params.user_id">
                <div class="column is-half is-offset-one-quarter">
                    User Name : <span
                        style="color:mediumseagreen">{{user.fullname}} </span>
                </div>
                <div class="column is-half is-offset-one-quarter">
                    User Email : <span
                        style="color:mediumseagreen">{{user.email}} </span>
                </div>
                <div v-if="AllConvMessage.length > 0">
                    <h2 class="subtitle">the user's last messages</h2>
                    <div v-for="message in AllConvMessage">
                        <router-link
                                :to="{ name: 'conversation', params: { id: message.channel_id , message_id: message.id}}">
                            <div class="list-item">
                                {{message.created_at}} : {{message.message}}
                            </div>
                        </router-link>
                    </div>
                </div>
                <div v-else>
                    <p>the user has not yet posted any message.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                AllConvMessage: []
            }
        },
        mounted() {
            this.chargerLesMessage()
        },
        methods: {
            chargerLesMessage() {
                axios
                    .get('channels?session_token=' + this.$store.getters.user_token, {})
                    .then(response => {
                        let conversations = response.data;
                        conversations.forEach(conversation => {
                            axios
                                .get('channels/' + conversation.id + "/posts?token=" + this.$store.getters.user_token, {})
                                .then(response => {
                                    let messages = response.data;
                                    messages.forEach(message => {
                                        if (this.$route.params.user_id == message.member_id) {
                                            this.AllConvMessage.push(message)
                                        }
                                    })
                                })
                        })
                    })
            },
        }
    }
</script>
<style scoped>
</style>
