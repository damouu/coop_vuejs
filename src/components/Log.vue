<template>
    <div class ="column is-4 is-offset-4">
        <img    alt="Vue logo" src="https://static1.millenium.us.org/articles/2/88/32/@/93282-2019-11-18-02h16-53-article_image_bd-1.png">
        <input  class="input is-danger"   v-on:input="fullname" type="email"   placeholder="fullanme"> <br/>
        <input  class="input is-info"     v-on:input="email" type="password"  placeholder="email"> <br/>
        <input  class="input is-info"     v-on:input="password" type="password"  placeholder="password"> <br/>
        <button class="button is-success" v-on:click="buttonCreateUser"> Create an account </button>
        <button class="button is-danger is-outlined" v-on:click="buttonLogIn"> Log into account </button>
        <button class="button is-warning is-active" v-on:click="buttonLogout"> Log out </button>
        <p>you are log as : {{this.$store.getters.fullname}}</p>
    </div>
</template>
<script>
    export default {
        methods: {
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
                        password :  this.$store.getters.password
                    })
                    .catch(error => console.log(error))
            },
            buttonLogIn: function(event) {
                axios
                    .post('members/signin',{
                        email :    this.$store.getters.email,
                        password : this.$store.getters.password
                    })
                    .then(response => (this.$store.commit("user_token",response.data.token),
                    this.$store.commit("user_id",response.data.member.id),
                    this.$store.commit("fullname",response.data.member.fullname),
                    this.$store.commit("user",true)
                    .catch(error => alert("Incorrect values"))))
            },
            buttonLogout: function(event) {
                axios
                    .delete('members/signout?session_token='+this.$store.getters.user_token,{})
                    .then(this.$store.commit("user",false)),
                    this.$store.commit("fullname"," ")
                    .catch(error => alert("Incorrect values"))
            },
        }
    }
</script>

<style scoped>

</style>