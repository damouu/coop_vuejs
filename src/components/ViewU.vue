<template>
    <div class="column is-4 is-offset-4">
        <img class="is-rounded" alt="Vue logo" src="https://static-cms.hotjar.com/images/user-behavior.width-750.jpg">
        <p class="title is-2">Here are all the members</p>
        <div v-for="user in $store.getters.getMembres">
            <div class="columns">
                <div class="column is-half is-offset-one-quarter">
                    <router-link
                            :to="{ name: 'UserInfo', params: { user_id: user.id}}">
                        <img v-bind:src="'https://api.adorable.io/avatars/100/'+ user.id + '.png'"/>
                        {{user.fullname}}
                    </router-link>
                    <div v-if="user.id !== $store.state.user_id">
                        <button class="button is-danger is-outlined is-rounded"
                                v-on:click=deleteMembre(user.id)>
                            <span>Delete</span>
                            <span class="icon is-small">
                        <i class="fas fa-times"></i>
                            </span>
                        </button>
                    </div>
                    <div v-else>
                        <p class="subtitle is-5"><span style="color:mediumseagreen"> You can not delete yourself </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            getMembres() {
                axios
                    .get('members?session_token=' + this.$store.getters.user_token, {})
                    .then(response => (this.$store.commit("getMembres", response.data)))
            },
            deleteMembre(user_id) {
                axios
                    .delete('members/' + user_id + "?token=" + this.$store.getters.user_token, {})
                    .then(this.getMembres)
            },
        },
        mounted() {
            this.getMembres();
        }
    }
</script>

<style scoped>

</style>