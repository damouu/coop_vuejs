<template>
    <div class ="column is-4 is-offset-4">
        <img    alt="Vue logo" src="https://static1.millenium.us.org/articles/2/88/32/@/93282-2019-11-18-02h16-53-article_image_bd-1.png">
        <input  class="input is-danger"   v-on:input="changed" type="email"   placeholder="email account"> <br/>
        <input  class="input is-info"     v-on:input="changed" type="password"  placeholder="password"> <br/>
        <button class="button is-success" v-on:click="buttonLogin"> Log in </button>
        <p>current price of bitcoin </p>
        <div v-for="currency in $store.getters.password">
            <p> {{currency.description}} {{currency.rate}}</p>
        </div>
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
                    .then(response => (this.$store.state.password = response.data.bpi))
                    .catch(error => console.log(error))
            },
        }
    }
</script>

<style scoped>

</style>