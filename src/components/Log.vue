<template>
    <div class ="column is-4 is-offset-4">
        <input  class="input is-danger"   v-on:input="changed" type="email"   placeholder="email account"> <br/>
        <input  class="input is-info"     v-on:input="changed" type="password"  placeholder="password"> <br/>
        <button class="button is-success" v-on:click="buttonClick"> Login </button>
        <p> user : {{$store.getters.email}} </p>
    </div>
</template>
<script>
    export default {
        methods: {
            changed: function(event) {
                this.$store.commit('email', event.target.value)
            },
            buttonClick: function(event) {
                alert(this.$store.getters.email);
                //console.log(this.$store.getters.email);
            },
        name: "Log",
        }
    }
</script>

<style scoped>

    .dede{
        background-color: grey;
    }
</style>