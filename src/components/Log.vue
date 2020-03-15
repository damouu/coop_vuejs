<template>
    <div class="column is-4 is-offset-4">
        <img alt="Vue logo"
             src="https://static1.millenium.us.org/articles/2/88/32/@/93282-2019-11-18-02h16-53-article_image_bd-1.png">
        <div class="field">
            <p class="control has-icons-left" v-on:input="fullname">
                <input class="input is-danger" type="text" placeholder="fullname">
                <span class="icon is-small is-left">
      <i class="fas fa-info-circle"></i>
    </span>
            </p>
        </div>
        <div class="field">
            <p class=" control has-icons-left has-icons-right" v-on:input="email">
                <input class="input input is-primary" type="email" placeholder="Email">
                <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left" v-on:input="password">
                <input class="input is-warning" type="password" placeholder="Password" name="Password" ref="Password">
                <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left" v-on:input="password">
                <input class="input is-warning" type="password" placeholder="CheckPassword" name="CheckPassword"
                       ref="CheckPassword">
                <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
            </p>
        </div>
        <button class="button is-success" v-on:click="setMembre"> Create an account</button>
        <button class="button is-danger is-outlined" v-on:click="signInMembre"> Log into account</button>
        <button class="button is-warning is-active" v-on:click="signOutMembre"> Log out</button>
        <button class="button is-link is-active" v-on:click="signedInMembre"> etat de la session</button>
        <div v-if="$store.getters.user === true">
            <article class="message is-success">
                <div class="message-header">
                    <p>Log state</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    <img v-bind:src="'https://api.adorable.io/avatars/60/'+ $store.getters.user_id + '.png'"/>
                    <strong>you are log as {{$store.getters.etatSession.member.fullname}}</strong>
                </div>
            </article>
        </div>
        <div v-else>
            <article class="message">
                <div class="message-header">
                    <p>Log state</p>
                    <button class="delete" aria-label="delete"></button>
                </div>
                <div class="message-body">
                    <strong>Currently no log.</strong>
                </div>
            </article>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            fullname: function (event) {
                this.$store.commit('fullname', event.target.value)
            },
            email: function (event) {
                this.$store.commit('email', event.target.value)
            },
            password: function (event) {
                this.$store.commit('password', event.target.value)
            },
            setMembre() {
                if (this.$refs.CheckPassword.value == this.$refs.Password.value) {
                    axios
                        .post('members', {
                            fullname: this.$store.getters.fullname,
                            email: this.$store.getters.email,
                            password: this.$store.getters.password
                        })
                    axios
                        .post('members/signin', {
                            email: this.$store.getters.email,
                            password: this.$store.getters.password
                        })
                        .then(response => (this.$store.commit("user_token", response.data.token),
                            this.$store.commit("user_id", response.data.member.id),
                            this.$store.commit("fullname", response.data.member.fullname),
                            this.$store.commit("email", response.data.member.email),
                            this.$store.commit("user", true),
                            this.$store.commit("etatSession", response.data),
                            this.$router.push('Conversations')))
                } else {
                    alert("password and CheckPassword fields are not the same, please be sure your password and checkpassword are the same.")
                }
            },
            signOutMembre() {
                axios
                    .delete('members/signout?session_token=' + this.$store.getters.user_token, {})
                    .then(this.$store.commit("user", false)),
                    this.$store.commit("fullname", " "),
                    this.$store.commit("user_id", " "),
                    this.$store.commit("password", " "),
                    this.$store.commit("user_token", " "),
                    this.$store.commit("etatSession", " "),
                    this.$store.commit("email", " ")
            },
            signedInMembre() {
                axios
                    .get('members/' + this.$store.getters.user_id + "/signedin?token=" + this.$store.getters.user_token, {})
                    .then(response => (this.$store.commit("etatSession", response.data)))
                alert("you are log as " + this.$store.getters.etatSession.member.fullname)
            },
            signInMembre() {
                axios
                    .post('members/signin', {
                        email: this.$store.getters.email,
                        password: this.$store.getters.password
                    })
                    .then(response => (this.$store.commit("user_token", response.data.token),
                            this.$store.commit("user_id", response.data.member.id),
                            this.$store.commit("fullname", response.data.member.fullname),
                            this.$store.commit("email", response.data.member.email),
                            this.$store.commit("user", true),
                            this.$store.commit("etatSession", response.data),
                            this.$router.push('Conversations')
                    ))
            }
        }
    }
</script>

<style scoped>

</style>