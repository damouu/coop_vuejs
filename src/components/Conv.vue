<template>
    <div class="column is-4 is-offset-4">
        <img alt="Vue logo" src="https://i.ytimg.com/vi/uG3SqjVoFos/maxresdefault.jpg">
        <button class="button is-success" v-on:click="buttonCreateConversation"> See a conversation</button>
        {{this.$route.params.id}}
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
                    .get('channels/id='+this.$router.params.id, {})
                    .catch(error => console.log(error))
            },
        }
    }
</script>

<style scoped>

</style>