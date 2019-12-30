<template>
    <div class ="column is-4 is-offset-4">
        <input  class="input is-danger"   v-on:input="changed" type="email"   placeholder="email account"> <br/>
        <input  class="input is-info"     v-on:input="changed" type="password"  placeholder="password"> <br/>
        <button class="button is-success" v-on:click="buttonLogin"> Log in </button>
        <p> dede: {{ $store.getters.password }}</p>
    </div>
</template>
<script>
    export default {
        methods: {
            changed : function (event){
            this.$store.commit('password')
            },
            buttonLogin: function(event) {
                axios
                    .get('v1/bpi/currentprice.json')
                    .then(response => (this.$store.state.password = response))
                    .catch(error => console.log(error))
            },
        }
    }
</script>

<style scoped>

</style>