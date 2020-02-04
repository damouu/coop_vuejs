<template>
    <div class="column is-4 is-offset-4">
        <img class="is-rounded" alt="Vue logo" src="https://static-cms.hotjar.com/images/user-behavior.width-750.jpg">
        <p class="is-4">Here are all the members</p>
        <div v-for="users in $store.getters.response">
            User : {{users.fullname}}
            <div v-if="users.id !== $store.state.user_id">
                <button class="button is-danger is-outlined is-rounded"
                        v-on:click=buttondeleteUser(users.id)>
                    <span>Delete</span>
                    <span class="icon is-small">
      <i class="fas fa-times"></i>
    </span>
                </button>
            </div>
            <div v-else>
                <p class="subtitle is-5"><span style="color:mediumseagreen"> You can not delete yourself </span></p>
            </div>
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
            async buttondeleteUser(user_id) {
                try {
                    await
                        axios
                            .delete('members/' + user_id + "?token=" + this.$store.getters.user_token, {})
                    this.buttonViewUsers()
                } catch (error) {
                    console.log(error);
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