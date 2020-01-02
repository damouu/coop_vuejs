<template>
    <div class ="column is-4 is-offset-4">
        <img    alt="Vue logo" src="http://conseilsjeux.com/wp-content/uploads/2019/12/Comment-obtenir-le-filtre-quotQuels-Pok%C3%A9mon-%C3%AAtes-vousquot-sur-Instagram.jpg">
        <input  class="input is-info"     v-on:input="conversation_label" type="text"  placeholder="Conversation's label"> <br/>
        <input  class="input is-info"     v-on:input="conversation_topic" type="text"  placeholder="Conversation's topic"> <br/>
        <button class="button is-success" v-on:click="buttonCreateConversation"> Create conversation </button>
        <button class="button is-danger is-outlined" v-on:click="buttonAllConversation"> See all conversation </button>
    </div>
</template>
<script>
    export default {
        methods: {
            conversation_label : function (event){
                this.$store.commit('conversation_label', event.target.value)
            },
            conversation_topic : function (event){
                this.$store.commit('conversation_topic', event.target.value)
            },
            buttonCreateConversation: function(event) {
                axios
                    .post('channels',{
                        label :          this.$store.getters.conversation_label,
                        topic :          this.$store.getters.conversation_topic,
                        session_token :  "57893d7fc2266cdc2fefa77c0ed6a31a3ce35c07"
                    })
                    .catch(error => console.log(error))
            },
            buttonAllConversation: function(event) {
                axios
                    .get('channels',{
                        session_token : "57893d7fc2266cdc2fefa77c0ed6a31a3ce35c07",
                    })
                    .then(response => (this.$store.state.conversation = response.data)
                    .catch(error => console.log(error)))
            },
        }
    }
</script>

<style scoped>

</style>