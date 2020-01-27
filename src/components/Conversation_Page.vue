<template>
    <div class="column is-4 is-offset-4">
        <img alt="Vue logo"
             src="http://conseilsjeux.com/wp-content/uploads/2019/12/Comment-obtenir-le-filtre-quotQuels-Pok%C3%A9mon-%C3%AAtes-vousquot-sur-Instagram.jpg">
        <div v-show="this.$store.state.user === true">
            <input class="input is-info" v-on:input="conversation_label" type="text" placeholder="Conversation's label">
            <br/>
            <input class="input is-info" v-on:input="conversation_topic" type="text" placeholder="Conversation's topic">
            <br/>
            <button class="button is-success" v-on:click="buttonCreateConversation"> Create conversation</button>
        </div>
        <button class="button is-danger is-outlined" v-on:click="buttonAllConversation"> See all conversations</button>
        <button class="button is-info is-rounded" v-on:click="buttondeleteConversation"> deleteConversation</button>
        <div v-for="conversation in $store.getters.conversations">
            <router-link :to="{ name: 'conversation', params: { id: conversation.id }}">
                conversation : {{conversation.label}} {{conversation.created_at}}
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            conversation_label: function (event) {
                this.$store.commit('conversation_label', event.target.value)
            },
            conversation_topic: function (event) {
                this.$store.commit('conversation_topic', event.target.value)
            },
            ViewConv: function (event) {
                alert("dede");
            },
            buttonCreateConversation: function (event) {
                axios
                    .post('channels', {
                        label: this.$store.getters.conversation_label,
                        topic: this.$store.getters.conversation_topic,
                        session_token: this.$store.getters.user_token,
                    })
                    .catch(error => console.log(error))
            },
            buttondeleteConversation: function (event) {
                axios
                    .delete('channels/' + "3e8315eb4eb19f2c72d7c07af935b8a0f2f43d48" + "?token=" + this.$store.getters.user_token, {})
                    .catch(error => console.log(error))
            },
            buttonAllConversation: function (event) {
                axios
                    .get('channels?session_token=' + this.$store.getters.user_token, {})
                    .then(response => (this.$store.commit("conversations", response.data))
                        .catch(error => console.log(error)))
            },
        }
    }
</script>

<style scoped>

</style>