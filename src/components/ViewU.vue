<template>
    <div class ="column is-4 is-offset-4">
        <img    alt="Vue logo" src="https://static-cms.hotjar.com/images/user-behavior.width-750.jpg">
        <button class="button is-info is-rounded" v-on:click="buttonViewUsers"> View members </button>
        <div v-for="users in $store.getters.response">
            User : <a v-on:click="ViewUser">{{users.fullname}} </a>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            buttonViewUsers: function(event) {
                axios
                    .get('members?session_token='+this.$store.getters.user_token,{})
                    .then(response => (this.$store.commit("response",response.data))
                    .catch(error => console.log(error)))
            },
            ViewUser: function(event) {
                alert("dede")
            },
        }
    }
</script>

<style scoped>

</style>