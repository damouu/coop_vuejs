<template>
    <div class="column is-4 is-offset-4">
        <img class="is-rounded" alt="Vue logo" src="https://static-cms.hotjar.com/images/user-behavior.width-750.jpg">
        <p class="is-4">Here are all the members</p>
        <div v-for="users in $store.getters.response">
            User : {{users.fullname}}
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
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
        },
        beforeMount() {
            this.buttonViewUsers();
        }
    }
</script>

<style scoped>

</style>