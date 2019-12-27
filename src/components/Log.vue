<template>
    <div class ="column is-4 is-offset-4">
        <input  class="input is-danger"   v-on:input="changed" type="email"   placeholder="email account"> <br/>
        <input  class="input is-info"     v-on:input="changed" type="password"  placeholder="password"> <br/>
        <button class="button is-success" v-on:click="buttonClick"> true </button>
        <button class="button is-success" v-on:click="buttonClick2"> false </button>
        <p> user : {{$store.getters.dede}} </p>
    </div>
</template>
<script>
    export default {
        methods: {
            changed: function(event) {
                this.$store.commit('email', event.target.value)
            },
            buttonClick: function(event) {
                alert(this.$store.getters.dede);
                this.$store.commit('dede', true)
            },
            buttonClick2: function(event) {
                alert(this.$store.getters.dede);
                this.$store.commit('dede', false)
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