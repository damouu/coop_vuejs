<template>
    <div class ="column is-4 is-offset-4">
        <img    alt="Vue logo" src="https://static1.millenium.us.org/articles/2/88/32/@/93282-2019-11-18-02h16-53-article_image_bd-1.png">
        <input  class="input is-danger"   v-on:input="fullname" type="email"   placeholder="fullanme"> <br/>
        <input  class="input is-info"     v-on:input="email" type="password"  placeholder="email"> <br/>
        <input  class="input is-info"     v-on:input="password" type="password"  placeholder="password"> <br/>
        <input  class="input is-info"     v-on:input="changed" type="password"  placeholder="rien"> <br/>
        <button class="button is-success" v-on:click="buttonCreateUser"> Create user </button>
        <button class="button is-info is-rounded" v-on:click="buttonViewUsers"> View users </button>
        <div v-for="users in $store.getters.response">
            {{users}}
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            changed : function (event){
            this.$store.commit('response')
            },
            fullname : function (event){
                this.$store.commit('fullname', event.target.value)
            },
            email : function (event){
                this.$store.commit('email', event.target.value)
            },
            password : function (event){
                this.$store.commit('password', event.target.value)
            },
            buttonCreateUser: function(event) {
                axios
                    .post('members',{
                        fullname :  this.$store.getters.fullname,
                        email :     this.$store.getters.email,
                        password : this.$store.getters.password
                    })
                    .catch(error => console.log(error))
            },
            buttonViewUsers: function(event) {
                axios
                    .get('members')
                    .then(response => (this.$store.state.response = response)
                    .catch(error => console.log(error)))
            },
        }
    }
</script>

<style scoped>

</style>